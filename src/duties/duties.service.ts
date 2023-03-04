import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Duties } from "../Entities/duties.etities";
import { CreateProjectInputDto } from "./dto/createProjectdto";
import { UpdateDutiesDto } from "./dto/updateDutiesdto";

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
        return this.dutiesrepository.findOne({where:{id:id},relations:["employee"]})
        
    }

    updateDuty(id:number, upodatedto:UpdateDutiesDto):Promise<Duties>{
        let duty:Duties = this.dutiesrepository.create(upodatedto)
        duty.id=id
        return this.dutiesrepository.save(duty)

    }

    async deleteDuty(id:number){
        let duty = this.findone(id)
        if (duty){
            let ret = await this.dutiesrepository.delete(id)
            if (ret.affected === 1){
                return duty
            }
        }
        throw new NotFoundException (`oops! record could not find data with id ${id}`)
    }
}