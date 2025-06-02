  import { NgModule } from '@angular/core';
  import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
  import {home} from "ionicons/icons";

  const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('./home/tab1.module').then(m => m.Tab1PageModule)
    },
    {
      path: 'tabs',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    // outras rotas...
  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
