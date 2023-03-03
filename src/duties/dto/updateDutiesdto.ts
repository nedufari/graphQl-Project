import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateDutiesDto{
    @Field()
    name:string

    @Field(()=>Int)
    code:number

    
}