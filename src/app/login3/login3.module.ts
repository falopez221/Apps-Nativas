import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login3PageRoutingModule } from './login3-routing.module';

import { Login3Page } from './login3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login3PageRoutingModule
  ],
  declarations: [Login3Page]
})
export class Login3PageModule {}
