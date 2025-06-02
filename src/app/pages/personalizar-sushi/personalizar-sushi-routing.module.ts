import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizarSushiPage } from './personalizar-sushi.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizarSushiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizarSushiPageRoutingModule {}
