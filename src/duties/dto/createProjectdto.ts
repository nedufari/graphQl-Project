import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProjectInputDto{
    @Field()
    name:string

    @Field(()=>Int)
    code:number

    
}