import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DAppModule } from "./dApp/dApp.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
