import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Duties } from "../Entities/duties.etities";
import { CreateProjectInputDto } from "./dto/createProjectdto";
import { UpdateDutiesDto } from "./dto/updateDutiesdto";
import { DutiesService } from "./duties.service";

@Resolver(()=>Duties)
export class DutiesResolver{
    constructor(private dutiesservice:DutiesService){}

    @Mutation(()=>Duties, {name:"createnewDuties"})
    createDuties(@Args("createnewproject") createDto:CreateProjectInputDto){
        return this.dutiesservice.createDuties(createDto)

    }

    @Query(()=>[Duties],{name:"findallduties"})
    findall(){
        return this.dutiesservice.findall()
    }

    @Query(()=>Duties,{name:"findoneduty"})
    findone(@Args("id",{type:()=>Int})id:number){
        return this.dutiesservice.findone(id)
    }

    @Mutation(()=>Duties,{name:"updateDuties"})
    updateDuties(@Args("updateduties")updatedto:UpdateDutiesDto, @Args("id",{type:()=>Int})id:number){
        return this.dutiesservice.updateDuty(id,updatedto)
    }

    @Mutation(()=>Duties,{name:"deleteDuties"})
    async deleteDuties(@Args("id", {type:()=>Int})id:number){
        return await this.dutiesservice.deleteDuty(id)
    }
}