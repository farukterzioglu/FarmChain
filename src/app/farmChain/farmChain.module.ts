import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilModule } from "../util/util.module";
import { BalanceComponent } from "./balance/balance.component";
import { FarmlistComponent } from "./farmList/farmList.component";

@NgModule({
    imports : [
        CommonModule, 
        UtilModule
    ],
    declarations :[ BalanceComponent, FarmlistComponent ],
    exports : [ BalanceComponent, FarmlistComponent  ]
})   
export class FarmChainModule{
    public constructor(){
    } 
}