import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'profesor', component: ProfesorComponent, canActivate: [AuthGuard]},
  { path: 'alumno', component: AlumnoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
