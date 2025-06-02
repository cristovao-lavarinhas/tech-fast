import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizarBebidaPageRoutingModule } from './personalizar-bebida-routing.module';

import { PersonalizarBebidaPage } from './personalizar-bebida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizarBebidaPageRoutingModule
  ],
  declarations: [PersonalizarBebidaPage]
})
export class PersonalizarBebidaPageModule {}
