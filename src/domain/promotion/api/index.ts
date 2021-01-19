import { InternalServerError } from './../../../utils/helper';
import { Promotion } from './../model/promotion';
import { PromotionPayload } from './../data/index';
import { AxiosInstance, AxiosResponse } from 'axios';
import { inject, injectable } from "inversify";
import SimplePromoCartHTTPClientID from "../../../http_client/simple_cart_client/identifier";
import ISimplePromotionCartAPI from "./interface";

@injectable()
class SimplePromotionCartAPI implements ISimplePromotionCartAPI {
    @inject(SimplePromoCartHTTPClientID.SimplePromoCartHTTPClient)
    private client: AxiosInstance;

    async calculatePrice(payload: PromotionPayload[]): Promise<AxiosResponse<Promotion | null>> {
        const result = await this.client
            .post("/v1/checkout", payload)
            .catch(function (error) {
                console.log('error', error);
                throw new InternalServerError("somethings wrong with the client");
            });
        console.log('result123', result);
        return result;
    }
}

export default SimplePromotionCartAPI;