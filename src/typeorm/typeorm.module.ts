import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmService } from "./typeorm.service";

@Module({
    imports:[],
    providers:[TypeOrmService]
})
export class TypeOrmModule{}