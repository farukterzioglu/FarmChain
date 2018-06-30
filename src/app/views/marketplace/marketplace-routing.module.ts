import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketplaceComponent } from './marketplace.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent,
    data: {
      title: 'Marketplace'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule {}
