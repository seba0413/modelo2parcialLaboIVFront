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
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ProfesorComponent,
    AlumnoComponent
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
