import { CanActivate , ExecutionContext, HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql"
import { EmployeeService } from "../employee/employee.service";
import { Employee } from "../Entities/employer.entity";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private employeeservice:EmployeeService){}

   async  canActivate(context:ExecutionContext): Promise<boolean>{
        const ctx = GqlExecutionContext.create(context).getContext()
        const {email, password}= ctx.req.body.variables;
        const employee :Employee = await this.employeeservice.finduserByemail(email) //always asynchonous i nature 
        if (employee && employee.password==password){
            ctx.user=employee
            return true
        }
        else{
            throw new HttpException ("Uthenticated", HttpStatus.UNAUTHORIZED)
            
        }


    }
}