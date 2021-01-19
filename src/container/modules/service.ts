import { ContainerModule } from "inversify";
import ISimplePromotionService from "../../domain/promotion/service/interface";
import SimplePromotionCartServiceID from "../../domain/promotion/identifier/service";
import SimpleCartService from "../../domain/promotion/service";

const serviceModule = new ContainerModule((bind) => {
    bind<ISimplePromotionService>(SimplePromotionCartServiceID.SimplePromotionCartService).to(SimpleCartService).inSingletonScope();
});

export default serviceModule;