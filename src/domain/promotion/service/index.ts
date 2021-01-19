import { PromotionPayload } from './../data/index';
import { inject, injectable } from "inversify";
import SimplePromotionCartAPIID from "../identifier/api";
import ISimplePromotionService from './interface';
import ISimplePromotionCartAPI from "../api/interface";
import TotalPriceType from "../types/total_price";

@injectable()
class SimpleCartService implements  ISimplePromotionService {
  @inject(SimplePromotionCartAPIID.SimplePromotionCartAPI) private api: ISimplePromotionCartAPI;

  async calculatePrice(payloads: string): Promise<TotalPriceType> {
      let response: TotalPriceType;
      let data: any;
      let params: PromotionPayload[] = JSON.parse(payloads) as PromotionPayload[];

      const result = await this.api.calculatePrice(params)
        .then(result => data = result.data)
        .catch(error => data = null);
;
      response = {
          totalPrice: data.totalPrice,
      };
      return response;
  }
}

export default SimpleCartService;