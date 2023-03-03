import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { Employee } from "../Entities/employer.entity";
import { InputEmployeeDto } from "./dto/inputDto";


@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee) private employeerepository: Repository<Employee>){}

    finadall():Promise<Employee[]>{
        return this.employeerepository.find()

  
    }

    createEmployee(employee:InputEmployeeDto):Promise<Employee>{
        let emp = this.employeerepository.create(employee)
        return this.employeerepository.save(emp)

    }

    findone(id:number):Promise<Employee>{
        return this.employeerepository.findOne({where:{id:id}})
        
    }
}