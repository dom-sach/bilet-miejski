import { Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {RoleGuard} from './guards/role.guard';
import {HomeComponent} from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./features/tickets/tickets.routes').then(m => m.TICKET_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'validator',
    loadChildren: () => import('./features/validator/validator.routes').then(m => m.VALIDATOR_ROUTES),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'TICKET_INSPECTOR' }
  }
];
