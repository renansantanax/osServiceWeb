import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { TicketComponent } from './components/pages/ticket/ticket.component';
import { MyticketsComponent } from './components/pages/mytickets/mytickets.component';
import { TicketDetailComponent } from './components/pages/ticket-detail/ticket-detail.component';
import { UsersComponent } from './components/pages/users/users.component';
import { AllticketsComponent } from './components/pages/alltickets/alltickets.component';
import { ReverseAuthGuard } from './guards/reverse-auth.guard';
import { SettingsComponent } from './components/pages/settings/settings.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ReverseAuthGuard],
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
    data: { animation: 'DashboardPage' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    data: { animation: 'SettingsPage' },
  },
  {
    path: 'ticket',
    component: TicketComponent,
    canActivate: [AuthGuard],
    data: { animation: 'ChamadosPage' },
  },
  {
    path: 'mytickets',
    component: MyticketsComponent,
    canActivate: [AuthGuard],
    data: { animation: 'MeusChamadosPage' },
  },
  {
    path: 'ticket/:id',
    component: TicketDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'alltickets',
    component: AllticketsComponent,
    canActivate: [AuthGuard],
    data: { animation: 'TodosChamadosPage' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: { animation: 'Registro' },
  },
  {
    path: '',
    component: DashboardComponent, // ou DashboardComponent
    canActivate: [AuthGuard],
  },
];
