import { Field, InputType, Int } from "@nestjs/graphql"
import { IsString } from "class-validator"
import { Duties } from "../../Entities/duties.etities"

@InputType()
export class SignUpDto{
   

    @Field()
    firstname:string

    @Field()
    lastame:string

    @Field()
    @IsString()
    email:string

    @Field()
    password:string

    @Field()
    designation:string

    @Field({nullable:true})
    city:string

    @Field(()=>Int)
    dutyid:number
}