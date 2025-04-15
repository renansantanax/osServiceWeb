import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { TicketComponent } from './components/pages/ticket/ticket.component';
import { MyticketsComponent } from './components/pages/mytickets/mytickets.component';
import { TicketDetailComponent } from './components/pages/ticket-detail/ticket-detail.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ticket',
    component: TicketComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mytickets',
    component: MyticketsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ticket/:id',
    component: TicketDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    // Rota padrão
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
