import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BazaarComponent } from './bazaar.component';

const routes: Routes = [
  {
    path: '',
    component: BazaarComponent,
    data: {
      title: 'Bazaar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BazaarRoutingModule {}
