import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Entidad12Service } from 'src/app/servicios/entidad1_2/entidad1-2.service';

@Component({
  selector: 'app-e1-item2',
  templateUrl: './e1-item2.component.html',
  styleUrls: ['./e1-item2.component.css']
})
export class E1Item2Component implements OnInit {

  idItem2: number;
  listadoEnt2: Array<any>;

  constructor(private rutaActiva: ActivatedRoute, private entidad1_2Service: Entidad12Service) {
    this.idItem2 = this.rutaActiva.snapshot.params.idItem2;
  }

  recibeIdEntidad1(event){
    if(event) {
      this.entidad1_2Service.ListarEntidad1_2(this.idItem2).subscribe(respuesta => {
        this.listadoEnt2 = respuesta; 
      })
    }
  }

  ngOnInit() {
    this.entidad1_2Service.ListarEntidad1_2(this.idItem2).subscribe(respuesta => {
      this.listadoEnt2 = respuesta; 
    })
  }

}
