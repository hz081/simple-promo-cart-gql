import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class TotalPriceType {
  @Field({ nullable: false })
  totalPrice: number;
}

export default TotalPriceType;
