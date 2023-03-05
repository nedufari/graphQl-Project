import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeModule } from "../employee/employee.module";
import { Employee } from "../Entities/employer.entity";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Module({
    imports:[TypeOrmModule.forFeature([Employee]), EmployeeModule], // impoeted employee module cuz i would be usin g it for the authetication 
    providers:[AuthService,AuthGuard],
    exports:[AuthService]
})
export class AuthModule{}