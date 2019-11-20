import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Entidad } from '../../clases/entidad'; 


@Injectable({
  providedIn: 'root'
})
export class Entidad1Service {

  constructor(private HttpService: HttpService) { }

  LoginEntidad(entidad: Entidad) {
    return this.HttpService.httpPostLoginRegistro('entidad/login/', entidad);
  }

  LoggedIn() {
    return !!localStorage.getItem('Token');
  }

  AltaEntidad(entidad: Entidad) {
    return this.HttpService.httpPostLoginRegistro('entidad/', entidad);
  }

  GuardarFoto(foto: FormData) {
    return this.HttpService.httpPostGuardarFoto('entidad/foto', foto);
  }

  ObtenerEntidades(param: string) {
    return this.HttpService.httpGet0('entidades/' + param)
  }

  ObtenerEntidad(id){
    return this.HttpService.httpGet0('entidad/' + id);
  }

  ObtenerEntidades2_Item3(idItem3){
    return this.HttpService.httpGet0('entidades2/' + idItem3);
  }
}
