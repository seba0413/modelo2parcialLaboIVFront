import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listaEntidades: Array<Entidad>;

  constructor(private entidadService: Entidad1Service) {} 

  recibeFiltroEntidades(campo3){
    this.entidadService.ObtenerEntidades(campo3 + '/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    })
  }

  ngOnInit() {debugger
    this.entidadService.ObtenerEntidades('todos/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    })
  }

}
