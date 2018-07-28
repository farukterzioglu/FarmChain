import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DAppModule } from "./dApp/dApp.module";
import { FarmChainModule } from "./farm-chain/farm-chain.module";
import { Web3Service } from "./util/web3.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DAppModule,
    FarmChainModule
  ],
  providers: [ Web3Service ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
