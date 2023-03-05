import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "../Entities/employer.entity";
import { SignUpDto } from "./dto/signupdto";
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService{
    constructor(@InjectRepository(Employee)private authripo:Repository<Employee>){}
    
    //bcrypt, signup, login, validateuser,

    hashpassword(password:string):Promise<string>{
       return  bcrypt.hash(password,10)
    }

    comparePassword(password:string, hasshedpassword:string){
        bcrypt.compare(password,hasshedpassword)
    }

    checkemail(email:string){
        let check = this.authripo.findOne({where:{email:email}})
        if (check){
            return true
      }
        

    }

    

      

}