import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    loadComponent: () => import('./loader/loader.page').then( m => m.LoaderPage)
  },  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then( m => m.InfoPage)
  },

];
