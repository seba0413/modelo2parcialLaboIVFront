import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';
import { Entidad2 } from '../../clases/entidad2';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listaEntidades: Array<Entidad>;
  listadoEnt2: Array<Entidad2>;

  constructor(private entidadService: Entidad1Service, private entidad2Service: Entidad2Service) {} 

  recibeFiltroEntidades(campo3){
    this.entidadService.ObtenerEntidades(campo3 + '/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    })
  }

  recibeNuevaMateria(event){
    if(event){
      this.entidad2Service.ObtenerEntidades2().subscribe(respuesta=>{
        this.listadoEnt2 = respuesta; 
      });
    }
  }

  ngOnInit() {
    this.entidadService.ObtenerEntidades('todos/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    });
    this.entidad2Service.ObtenerEntidades2().subscribe(respuesta=>{
      this.listadoEnt2 = respuesta; 
    })
  }

}
