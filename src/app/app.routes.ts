import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './features/home/home';

export const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    component:HomeComponent
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login').then(m => m.LoginComponent),
  },

  // Dashboard is LAZY LOADED (routes file)
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },

  { path: '**', redirectTo: 'home' },                                                                       // Wildcard route
];
















//loadChildren
//Used to lazy load a group of routes (feature module or route configuration file).
// It loads a route configuration file or module, not just a component.
// That file can contain multiple routes.