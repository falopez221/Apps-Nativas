import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login4PageRoutingModule } from './login4-routing.module';

import { Login4Page } from './login4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login4PageRoutingModule
  ],
  declarations: [Login4Page]
})
export class Login4PageModule {}
