import { ContainerModule } from "inversify";
import SimplePromotionResolver from "../../resolvers/simple_promo/simple_promo";

const resolverModule = new ContainerModule((bind) => {
    bind<SimplePromotionResolver>(SimplePromotionResolver).toSelf().inSingletonScope();
});

export default resolverModule;