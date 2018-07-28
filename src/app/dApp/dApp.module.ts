import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilModule } from "../util/util.module";
import { MetaCoinComponent } from './meta-coin/meta-coin.component';

@NgModule({
    imports : [
        CommonModule, 
        UtilModule
    ],
    declarations :[ MetaCoinComponent],
    exports : [ MetaCoinComponent ]
})
export class DAppModule{}