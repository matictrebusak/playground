import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'random-elements',
    loadComponent: () => import('./random-elements/random-elements.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
