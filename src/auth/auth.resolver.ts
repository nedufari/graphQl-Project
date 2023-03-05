import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "./auth.guard";

@Resolver(()=>String)
export class AuthResolver {

    @Query(()=>String)
    @UseGuards(AuthGuard)
    login (@Args({name:"email",type:()=>String})email:string, 
            @Args({name:"password", type:()=>String})password:String):String{
                return "this is my login route folks"

    }
}