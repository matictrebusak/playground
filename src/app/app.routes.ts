import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'my-nav',
    loadComponent: () => import('./my-nav/my-nav.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
