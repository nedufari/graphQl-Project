import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Duties } from "../Entities/duties.etities";
import { DutiesResolver } from "./duties.resolver";
import { DutiesService } from "./duties.service";

@Module({
    imports:[TypeOrmModule.forFeature([Duties])],
    providers:[DutiesService, DutiesResolver],
    exports:[DutiesService]
    
})


export class DutiesModule{}