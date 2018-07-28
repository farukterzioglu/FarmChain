import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmCoinComponent } from './farm-coin/farm-coin.component';
import { UtilModule } from "../util/util.module";

@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [FarmCoinComponent],
  exports : [
    FarmCoinComponent
  ]
})
export class FarmChainModule { }
