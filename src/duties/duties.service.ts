import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Duties } from "../Entities/duties.etities";
import { CreateProjectInputDto } from "./dto/createProjectdto";

@Injectable()
export class DutiesService{
    constructor(@InjectRepository(Duties) private dutiesrepository:Repository<Duties>){}

    createDuties(createdto:CreateProjectInputDto):Promise<Duties>{
        let duty= this.dutiesrepository.create(createdto)
        return this.dutiesrepository.save(duty)
        
    }

    findall():Promise<Duties[]>{
        return this.dutiesrepository.find({relations:["employee"]})
    }

    findone(id:number):Promise<Duties>{
        return this.dutiesrepository.findOne({where:{id:id}})
        
    }
}