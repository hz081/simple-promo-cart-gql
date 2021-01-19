import { ContainerModule } from "inversify"
import { AxiosInstance } from "axios";
import SimplePromoCartHTTPClientID from "../../http_client/simple_cart_client/identifier";
import SimplePromoCartClient from "../../http_client/simple_cart_client/simple_cart_client";

const httpClientModule = new ContainerModule((bind) => {
    bind<AxiosInstance>(SimplePromoCartHTTPClientID.SimplePromoCartHTTPClient).toFunction(SimplePromoCartClient);
});

export default httpClientModule;