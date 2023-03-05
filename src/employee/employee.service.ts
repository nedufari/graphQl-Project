import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { AuthService } from "../auth/auth.service";
import { DutiesModule } from "../duties/duties.module";
import { DutiesService } from "../duties/duties.service";
import { Duties } from "../Entities/duties.etities";
import { Employee } from "../Entities/employer.entity";
import { InputEmployeeDto } from "./dto/inputDto";
import { UpdateEmployeeDto } from "./dto/update.dto";


@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee) private employeerepository: Repository<Employee>,
    private dutiesservice:DutiesService, private authservice:AuthService){}


    //for authenticaticatio 

    async finduserByemail(email:string){
        const user = await this.employeerepository.findOne({where:{email:email}})
        if (!user){
            return user;
        }
        
    }






    finadall():Promise<Employee[]>{
        return this.employeerepository.find()
    }

    async createEmployee(employee:InputEmployeeDto):Promise<Employee>{
        // let emp = this.employeerepository.create(employee)
        const exixtinguser = await this.finduserByemail(employee.email)
        if (exixtinguser){
            throw new HttpException(`user with email: ${employee.email} already exists`,HttpStatus.FOUND)
        }
       
        const emp = new Employee() 
        emp.firstname= employee.firstname
        emp.lastame= employee.lastame
        emp.city= employee.city
        emp.email= employee.email
        emp.designation= employee.designation
        emp.password= await this.authservice.hashpassword(employee.password);
        
        
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