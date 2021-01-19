import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class DefaultType {

  @Field({ nullable: true })
  message?: string;
}

export default DefaultType;
