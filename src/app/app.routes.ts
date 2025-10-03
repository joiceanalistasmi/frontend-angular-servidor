import { Routes } from '@angular/router';
import { Login } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { DashboardComponent } from './components/dashboard/dashboard';
import { QuestoesComponent } from './components/questoes/questoes';
import { ServidorComponent } from './components/servidor/servidor';
import { Servidorlist } from './components/servidor/servidorlist/servidorlist';
import { ServidorDetailsComponent } from './components/servidor/servidordetails/servidordetails';

  import { UsuariosComponent } from './components/usuarios/usuarios';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: Login },
    { path: "admin", component: PrincipalComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // redireciona /admin para /admin/dashboard
        { path: 'dashboard', component: DashboardComponent },  
        { path: 'servidor', component: ServidorComponent },
        { path: 'servidorlist', component: Servidorlist },
        { path: 'admin/servidordetails', component: ServidorDetailsComponent },
        { path: 'admin/servidordetails/:id', component: ServidorDetailsComponent },
        
        { path: 'questoes', component: QuestoesComponent },  
         ]}
];