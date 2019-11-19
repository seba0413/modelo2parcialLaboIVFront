import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpService } from './servicios/http/http.service';
import { Entidad1Service } from './servicios/entidad1/entidad1.service';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './componentes/admin/admin.component';
import { AltaEntidad2Component } from './componentes/alta-entidad2/alta-entidad2.component';
import { ListadoEntidad2Component } from './componentes/listado-entidad2/listado-entidad2.component';
import { ListadoEntidad1Component } from './componentes/listado-entidad1/listado-entidad1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AltaEntidad2Component,
    ListadoEntidad2Component,
    ListadoEntidad1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, Entidad1Service, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
