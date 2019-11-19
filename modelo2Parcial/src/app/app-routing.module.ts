import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { E1Item2Component } from './componentes/e1-item2/e1-item2.component';
import { E1Item3Component } from './componentes/e1-item3/e1-item3.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'item2/:idItem2', component: E1Item2Component, canActivate: [AuthGuard]},
  { path: 'item3', component: E1Item3Component, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
