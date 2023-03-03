import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Duties } from "./duties.etities"

@ObjectType()
@Entity()
export class Employee{

    @Field(()=> Int)
    @PrimaryGeneratedColumn()
    id:number


    @Field()
    @Column()
    firstname:string

    @Field()
    @Column()
    lastame:string

    @Field()
    @Column()
    designation:string

    @Field({nullable:true})
    @Column()
    city:string

    // @Field(()=)
    // @Column({type:"time with time zone",default:()=>'CURRENT_TIMESTAMP'})
 
    // createdAt:Date
    @ManyToOne(()=>Duties, duties=>duties.employee)
    @Field(()=>Duties)
    duty :Duties

    @Column()
    @Field(()=>Int)
    dutyid:number
}