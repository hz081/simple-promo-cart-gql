import { injectable, inject } from 'inversify';
import { Resolver, Ctx, Arg, Mutation, Args, Query } from 'type-graphql';
import { ServerContext } from '../../context';
import SimplePromotionCartServiceID from '../../domain/promotion/identifier/service';
import ISimplePromotionService from '../../domain/promotion/service/interface';
import TotalPriceType from '../../domain/promotion/types/total_price';
import DefaultType from '../../domain/promotion/types/default';

@injectable()
@Resolver(of => DefaultType)
export default class SimplePromotionResolver {
    @inject(SimplePromotionCartServiceID.SimplePromotionCartService) service: ISimplePromotionService;

    @Query(returns => DefaultType)
    async default(): Promise<DefaultType> {
        return { };
    }

    @Mutation(returns => TotalPriceType)
    async calculate(
        @Ctx() ctx: ServerContext,
        @Arg("params") params: string,
    ): Promise<TotalPriceType> {
        return await this.service.calculatePrice(params);
    }
}
