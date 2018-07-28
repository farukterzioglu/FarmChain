import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BazaarComponent } from './bazaar.component';
import { BazaarRoutingModule } from './bazaar-routing.module';

import { CreateProductComponent } from "../../farmChain/marketplace/createProduct.component";
import { MarketplaceComponent } from "../../farmChain/marketplace/marketplace.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BazaarRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ BazaarComponent, CreateProductComponent, MarketplaceComponent ]
})
export class BazaarModule { }
