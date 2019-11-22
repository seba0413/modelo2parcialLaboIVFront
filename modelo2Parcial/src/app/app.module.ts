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
import { E1Item2Component } from './componentes/e1-item2/e1-item2.component';
import { AltaEntidad1Entidad2Component } from './componentes/alta-entidad1-entidad2/alta-entidad1-entidad2.component';
import { ListadoEntidad1Entidad2Component } from './componentes/listado-entidad1-entidad2/listado-entidad1-entidad2.component';
import { E1Item3Component } from './componentes/e1-item3/e1-item3.component';
import { ListadoEntidad2Item3Component } from './componentes/listado-entidad2-item3/listado-entidad2-item3.component';
import { ListadoEntidad1Item3Component } from './componentes/listado-entidad1-item3/listado-entidad1-item3.component';
import { ResaltarComponent } from './directivas/resaltar/resaltar.component';
import { IndicarPropiedadComponent } from './directivas/indicar-propiedad/indicar-propiedad.component';
import { MailComponent } from './componentes/mail/mail.component';
import { SortbyPipe } from './pipes/sortby.pipe';
import { NotaPipe } from './pipes/nota.pipe';
import { DetalleMateriaComponent } from './componentes/detalle-materia/detalle-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AltaEntidad2Component,
    ListadoEntidad2Component,
    ListadoEntidad1Component,
    E1Item2Component,
    AltaEntidad1Entidad2Component,
    ListadoEntidad1Entidad2Component,
    E1Item3Component,
    ListadoEntidad2Item3Component,
    ListadoEntidad1Item3Component,
    ResaltarComponent,
    IndicarPropiedadComponent,
    MailComponent,
    SortbyPipe,
    NotaPipe,
    DetalleMateriaComponent,
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
