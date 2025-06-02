import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizarHamburgerPage } from './personalizar-hamburger.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizarHamburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizarHamburgerPageRoutingModule {}
