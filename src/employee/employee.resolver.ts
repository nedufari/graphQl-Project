
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Employee } from "../Entities/employer.entity";
import { InputEmployeeDto } from "./dto/inputDto";
import { UpdateEmployeeDto } from "./dto/update.dto";
import { EmployeeService } from "./employee.service";


@Resolver(()=>Employee) //output type for the resolver 
export class EmployeeReolver{
    constructor(private employeeservice:EmployeeService){}


    @Query(()=>[Employee],{name:"FindAllEmployees"}) //output type for the query
    findall(){
        return this.employeeservice.finadall()

    }

    @Query(()=>Employee,{name:"findoneemployee"})
    findone(@Args("id",{type:()=>Int})id:number){
        return this.employeeservice.findone(id)
    }

    @Mutation(()=>Employee, {name:"createEmployee"}) // the mutatio is for inputs only ie for post 
    createEmployee(@Args("employeeInput")employee:InputEmployeeDto){
        return this.employeeservice.createEmployee(employee)
    }

    @Mutation(()=>Employee,{name:"updateEmployee"})
    updateDuties(@Args("updateEmployee")updatedto:UpdateEmployeeDto){
        return this.employeeservice
    }

    @Mutation(()=>Employee,{name:"deleteEmployee"})
    deleteEmployee(@Args("id", {type:()=>Int})id:number){
        return this.employeeservice
    }
}

