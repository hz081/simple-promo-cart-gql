import { Container } from "inversify";
import httpClientModule from "./modules/httpclient";
import apiModule from "./modules/api";
import serviceModule from "./modules/service";
import resolverModule from "./modules/resolver";

const container = new Container();
container.load(httpClientModule, apiModule, serviceModule, resolverModule);

export default container;
