import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import {ApolloDriver,ApolloDriverConfig} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm"
import { TypeOrmService } from './typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { DutiesModule } from './duties/duties.module';

@Module({
  imports: [EmployeeModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql') //approach for code first nd would automatically generate the schemas 
  }),
  DutiesModule,
TypeOrmModule.forRootAsync({useClass:TypeOrmService}),
ConfigModule.forRoot({isGlobal:true}),],
  controllers: [],
  providers: [],
})
export class AppModule {}
