import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "../Entities/employer.entity";
import { EmployeeReolver } from "./employee.resolver";
import { EmployeeService } from "./employee.service";

@Module({
    imports:[TypeOrmModule.forFeature([Employee])], //always solves the ijectrepository issues 
    providers:[EmployeeService, EmployeeReolver],
    exports:[EmployeeService]

})
export class EmployeeModule{}