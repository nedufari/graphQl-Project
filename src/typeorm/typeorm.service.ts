import { Injectable } from "@nestjs/common";
import {ConfigService } from "@nestjs/config";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm"
import { Duties } from "../Entities/duties.etities";

import { Employee } from "../Entities/employer.entity";





@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory{
    constructor (private configservice:ConfigService){}

    createTypeOrmOptions(): TypeOrmModuleOptions{
        return{
            type:'postgres',
            host:this.configservice.get('DATABASE_HOST'),
            port:this.configservice.get('DATABASE_PORT'),
            username:this.configservice.get('DATABASE_USERNAME'),
            password:String(this.configservice.get('DATABASE_PASSWORD')),
            database:this.configservice.get('DATABASE_NAME'),
            entities: [Employee,Duties],
            synchronize:true,
            logging:false,
            migrations:[],       
            subscribers:[]
        }
        
    }
}

