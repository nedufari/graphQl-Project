import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employer.entity";

@ObjectType()
@Entity()

export class Duties{

    @Field(()=> Int)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string

    @Field(()=> Int) //mappig the scallar type
    @Column()
    code:number

    @OneToMany(()=>Employee, employee=>employee.duty)
    @Field(()=>[Employee],{nullable:true})
    employee:Employee[]
    
}