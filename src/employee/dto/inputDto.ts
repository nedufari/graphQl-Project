import { Field, InputType, Int } from "@nestjs/graphql"
import { IsEmail, IsString } from "class-validator"
import { Duties } from "../../Entities/duties.etities"
import { Roles } from "../../Entities/role.enum"

@InputType()
export class InputEmployeeDto{
   

    @Field()
    firstname:string

    @Field()
    lastame:string

    @Field()
    designation:string

    @Field()
    @IsEmail()
    email:string

    @Field()
    @IsString()
    password:string

    @Field({nullable:true})
    city:string

    // @Field(()=>Int)
    // dutyid:number

    // @Field()
    // role:Roles
}