import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizarBebidaPage } from './personalizar-bebida.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizarBebidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizarBebidaPageRoutingModule {}
