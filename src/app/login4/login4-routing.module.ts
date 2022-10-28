import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login4Page } from './login4.page';

const routes: Routes = [
  {
    path: '',
    component: Login4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login4PageRoutingModule {}
