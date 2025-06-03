import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaPage } from './conta.page';

const routes: Routes = [
  {
    path: '',
    component: ContaPage
  },  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'pontos',
    loadChildren: () => import('./pontos/pontos.module').then( m => m.PontosPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaPageRoutingModule {}
