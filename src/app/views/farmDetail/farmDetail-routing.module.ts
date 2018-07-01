import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmDetailComponent } from './farmDetail.component';

const routes: Routes = [
  {
    path: '',
    component: FarmDetailComponent,
    data: {
      title: 'My Farm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmDetailRoutingModule {}
