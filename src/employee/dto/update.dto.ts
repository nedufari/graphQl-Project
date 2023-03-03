import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdateEmployeeDto{
   

    @Field()
    firstname:string

    @Field()
    lastame:string

    @Field()
    designation:string

    @Field({nullable:true})
    city:string
}