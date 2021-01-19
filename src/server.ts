import { generateContext } from './context';
import "dotenv/config";
import "reflect-metadata";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import RootResolvers from "./resolvers";
import container from "./container";
import { GraphQLSchema } from "graphql";


const createSchema = async (): Promise<GraphQLSchema> => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    container,
    resolvers: RootResolvers,
  });
  return makeExecutableSchema({ typeDefs, resolvers });
}

const createServer = async (schema: GraphQLSchema): Promise<ApolloServer> => {
  return new ApolloServer({
    schema,
    cors: true,
    tracing: true,
    debug: process.env.GQL_MODE == "production" ? false : true,
    playground: process.env.GQL_MODE == "production" ? false : true,
    introspection: process.env.GQL_MODE == "production" ? false : true,
    context: generateContext,
  });
};

const runServer = async (server: ApolloServer) => {
  const port = process.env.GQL_PORT || 6045;
  const serverInfo = await server.listen(port)
  console.log(`Your server already running at port ${serverInfo.port}`);
}

createSchema()
  .then(createServer)
  .then(runServer)
  .catch(console.error);
