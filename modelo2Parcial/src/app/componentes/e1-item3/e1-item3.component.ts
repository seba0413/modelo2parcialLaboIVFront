import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entidad } from '../../clases/entidad';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';

@Component({
  selector: 'app-e1-item3',
  templateUrl: './e1-item3.component.html',
  styleUrls: ['./e1-item3.component.css']
})
export class E1Item3Component implements OnInit {

  idItem3: number; 
  entidad1Item3: Entidad; 
  listadoEntidad2_Item3: Array<any>;

  constructor(private rutaActiva: ActivatedRoute, private entidad1Service: Entidad1Service) {}

  ngOnInit() {
    this.idItem3 = this.rutaActiva.snapshot.params.idItem3;
    this.entidad1Service.ObtenerEntidad(this.idItem3).subscribe(respuesta => { this.entidad1Item3 = respuesta});
    this.entidad1Service.ObtenerEntidades2_Item3(this.idItem3).subscribe(respuesta => {this.listadoEntidad2_Item3 = respuesta});
  }

}
