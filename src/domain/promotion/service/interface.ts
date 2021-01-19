import TotalPriceType from '../types/total_price';

interface ISimplePromotionService {
  calculatePrice: (payloads: string) => Promise<TotalPriceType>;
}

export default ISimplePromotionService;
