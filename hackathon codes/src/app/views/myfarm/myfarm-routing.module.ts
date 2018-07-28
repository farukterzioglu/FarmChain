import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfarmComponent } from './myfarm.component';

const routes: Routes = [
  {
    path: '',
    component: MyfarmComponent,
    data: {
      title: 'My Farm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyfarmRoutingModule {}
