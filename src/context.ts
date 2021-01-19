import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { ContextFunction } from 'apollo-server-core';
export interface ServerContext {}

export const generateContext: ContextFunction<ExpressContext, ServerContext> = ({ req }) => {
  return {};
}