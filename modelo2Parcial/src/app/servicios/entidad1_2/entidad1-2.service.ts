import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class Entidad12Service {

  constructor(private httpService: HttpService) { }

  AltaEntidad1_2(idEnt1, idEnt2){
    return this.httpService.httpPost0('entidad1_2/alta/', {idEntidad1: idEnt1, idEntidad2: idEnt2});
  }

  ListarEntidad1_2(idEnt1){
    return this.httpService.httpGet0('entidad1_2/' + idEnt1);
  }

  ObtenerItems2_Item3(IdEntidad2){
    return this.httpService.httpGet0('/item2/item3/' + IdEntidad2);
  }
}
