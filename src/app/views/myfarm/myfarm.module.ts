import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MyfarmComponent } from './myfarm.component';
import { MyfarmRoutingModule } from './myfarm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyfarmRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ MyfarmComponent ]
})
export class MyfarmModule { }
