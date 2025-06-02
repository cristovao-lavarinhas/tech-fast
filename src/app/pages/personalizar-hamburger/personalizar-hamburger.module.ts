import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizarHamburgerPageRoutingModule } from './personalizar-hamburger-routing.module';

import { PersonalizarHamburgerPage } from './personalizar-hamburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizarHamburgerPageRoutingModule
  ],
  declarations: [PersonalizarHamburgerPage]
})
export class PersonalizarHamburgerPageModule {}
