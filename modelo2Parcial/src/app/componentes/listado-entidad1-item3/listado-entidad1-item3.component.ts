import { Component, OnInit, Input } from '@angular/core';
import { Entidad2 } from '../../clases/entidad2';
import { Entidad12Service } from 'src/app/servicios/entidad1_2/entidad1-2.service';

@Component({
  selector: 'app-listado-entidad1-item3',
  templateUrl: './listado-entidad1-item3.component.html',
  styleUrls: ['./listado-entidad1-item3.component.css']
})
export class ListadoEntidad1Item3Component implements OnInit {

  @Input() ListadoEntidades2: Array<Entidad2>;
  idEntidad2Seleccionada: number; 
  listadoItem2: Array<any>;

  constructor(private entidad1_2Service: Entidad12Service) {
    this.listadoItem2 = new Array<any>();
   }

  buscarItems2(){
    this.entidad1_2Service.ObtenerItems2_Item3(this.idEntidad2Seleccionada).subscribe(respuesta => {
      this.listadoItem2 = respuesta; 
    })
  }

  ngOnInit() {
  }

}
