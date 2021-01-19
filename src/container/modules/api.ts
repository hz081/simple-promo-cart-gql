import { ContainerModule } from "inversify";
import ISimplePromotionCartAPI from "../../domain/promotion/api/interface";
import SimplePromotionCartAPIID from "../../domain/promotion/identifier/api";
import SimplePromotionCartAPI from "../../domain/promotion/api";

const apiModule = new ContainerModule((bind) => {
    bind<ISimplePromotionCartAPI>(SimplePromotionCartAPIID.SimplePromotionCartAPI).to(SimplePromotionCartAPI).inSingletonScope();
});

export default apiModule;