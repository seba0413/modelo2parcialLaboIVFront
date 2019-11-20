import { Component, OnInit, Input } from '@angular/core';
import { Entidad12Service } from 'src/app/servicios/entidad1_2/entidad1-2.service';

@Component({
  selector: 'app-listado-entidad1-entidad2',
  templateUrl: './listado-entidad1-entidad2.component.html',
  styleUrls: ['./listado-entidad1-entidad2.component.css']
})
export class ListadoEntidad1Entidad2Component implements OnInit {

  @Input() idEntidad1;
  @Input() listadoEntidades2DeEntidad1: Array<any>;

  constructor(private entidad1_2Service: Entidad12Service) { }

  ngOnInit() {
  }

}
