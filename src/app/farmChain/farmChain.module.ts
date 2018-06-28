import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilModule } from "../util/util.module";
import { BalanceComponent } from "./balance/balance.component";

@NgModule({
    imports : [
        CommonModule, 
        UtilModule
    ],
    declarations :[ BalanceComponent ],
    exports : [ BalanceComponent ]
})   
export class FarmChainModule{
    public constructor(){
        console.log("FarmChainModule ctor");
    } 
}