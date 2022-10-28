import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login3Page } from './login3.page';

const routes: Routes = [
  {
    path: '',
    component: Login3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login3PageRoutingModule {}
