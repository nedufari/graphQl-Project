import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Duties } from "./duties.etities"
import { Roles } from "./role.enum"

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
    @Column({unique:true, nullable:false})
    email:string


    @Field()
    @Column({nullable:false,})
    password:string

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

    // @Column({nullable:true})
    // @Field(()=>Int)
    // dutyid:number

    @Column({type:"enum", enum:Roles, default:Roles.EMPLOYEE, nullable:true})
    @Field()
    role:Roles
}