import { Routes } from '@angular/router';
import { Login } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { DashboardComponent } from './components/dashboard/dashboard';
import { QuestoesFormComponent } from './components/questoes/questao-form/questao-form'; 
import { Servidorlist } from './components/servidor/servidorlist/servidorlist';
import { ServidorDetailsComponent } from './components/servidor/servidorForm/servidorForm';
import { QuestaoList } from './components/questoes/questao-list/questao-list';
import { UsuariosComponent } from './components/usuarios/usuarios';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: Login },
  {
    path: "admin", component: PrincipalComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'servidor', component: ServidorDetailsComponent },
      { path: 'servidorlist', component: Servidorlist },
      { path: 'servidordetails', component: ServidorDetailsComponent },
      { path: 'servidordetails/:id', component: ServidorDetailsComponent },
      { path: 'questaolist', component: QuestaoList },
      { path: 'questao', component: QuestoesFormComponent },
      { path: 'questoes', component: QuestoesFormComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ]
  }
];
