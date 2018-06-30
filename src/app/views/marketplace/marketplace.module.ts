import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MarketplaceRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ MarketplaceComponent ]
})
export class MarketplaceModule { }
