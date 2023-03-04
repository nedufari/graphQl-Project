import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { DutiesModule } from "../duties/duties.module";
import { DutiesService } from "../duties/duties.service";
import { Duties } from "../Entities/duties.etities";
import { Employee } from "../Entities/employer.entity";
import { InputEmployeeDto } from "./dto/inputDto";
import { UpdateEmployeeDto } from "./dto/update.dto";


@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee) private employeerepository: Repository<Employee>,
    private dutiesservice:DutiesService){}

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

    updateEmployee(id:number, employeeupdate:UpdateEmployeeDto){
        let employee: Employee = this.employeerepository.create(employeeupdate)
        employee.id =id
        return this.employeerepository.save(employee)
    }

    async deleteemployee(id:number){
        let employee =this.findone(id)
        if (employee){
            let ret = await this.employeerepository.delete(id)
            if (ret.affected===1) {
                return employee
            }
        }
        throw new NotFoundException (`oops! the record could not find data with the id ${id}`)

    }

    

    getProject(id:number):Promise<Duties>{
        return this.dutiesservice.findone(id)
    }
}