import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "../auth/auth.service";
import { DutiesModule } from "../duties/duties.module";
import { Employee } from "../Entities/employer.entity";
import { EmployeeReolver } from "./employee.resolver";
import { EmployeeService } from "./employee.service";

@Module({
    imports:[TypeOrmModule.forFeature([Employee]), DutiesModule], //always solves the ijectrepository issues 
    providers:[EmployeeService, EmployeeReolver,AuthService],
    exports:[EmployeeService]

})
export class EmployeeModule{}