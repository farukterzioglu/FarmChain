import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { FarmDetailComponent } from './farmDetail.component';
import { FarmDetailRoutingModule } from './farmDetail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FarmDetailRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ FarmDetailComponent ]
})
export class FarmDetailModule { }
