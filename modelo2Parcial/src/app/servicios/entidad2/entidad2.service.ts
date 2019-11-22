import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Entidad2 } from '../../clases/entidad2';

@Injectable({
  providedIn: 'root'
})
export class Entidad2Service {

  constructor(private HttpService: HttpService) { }

  altaEntidad2(entidad2: Entidad2){
    return this.HttpService.httpPost0('entidad2/alta/', entidad2);
  }

  ObtenerEntidades2(){
    return this.HttpService.httpGet0('entidades2/');
  }

  GuardarFotoMateria(foto: FormData){
    return this.HttpService.httpPostGuardarFoto('entidad2/foto', foto);
  }

  ObtenerAlumnosInscriptosEnMateria(idMateria){
    return this.HttpService.httpGet0('/alumnos/materia/' + idMateria);
  }
}
