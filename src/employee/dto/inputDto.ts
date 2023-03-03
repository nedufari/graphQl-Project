import { Field, InputType, Int } from "@nestjs/graphql"
import { Duties } from "../../Entities/duties.etities"

@InputType()
export class InputEmployeeDto{
   

    @Field()
    firstname:string

    @Field()
    lastame:string

    @Field()
    designation:string

    @Field({nullable:true})
    city:string

    @Field(()=>Int)
    dutyid:number
}