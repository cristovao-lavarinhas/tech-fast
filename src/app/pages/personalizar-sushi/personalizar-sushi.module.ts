import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizarSushiPageRoutingModule } from './personalizar-sushi-routing.module';

import { PersonalizarSushiPage } from './personalizar-sushi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizarSushiPageRoutingModule
  ],
  declarations: [PersonalizarSushiPage]
})
export class PersonalizarSushiPageModule {}
