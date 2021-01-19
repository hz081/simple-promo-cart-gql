import { PromotionPayload } from './../data/index';
import { Promotion } from './../model/promotion';
import { AxiosResponse } from "axios";

interface ISimplePromotionCartAPI {
  calculatePrice: (payload: PromotionPayload[]) => Promise<AxiosResponse<Promotion | null>>;
}

export default ISimplePromotionCartAPI;
