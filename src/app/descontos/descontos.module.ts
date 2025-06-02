
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DescontosPageRoutingModule } from './descontos-routing.module';

import { DescontosPage } from './descontos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    DescontosPageRoutingModule
  ],
  declarations: [DescontosPage]
})
export class DescontosPageModule {}
