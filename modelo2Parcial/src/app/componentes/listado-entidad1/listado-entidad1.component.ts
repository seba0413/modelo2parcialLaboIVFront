import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entidad } from '../../clases/entidad';

@Component({
  selector: 'app-listado-entidad1',
  templateUrl: './listado-entidad1.component.html',
  styleUrls: ['./listado-entidad1.component.css']
})
export class ListadoEntidad1Component implements OnInit {

  @Input() listadoEntidades: Array<Entidad>;
  @Output() filtroSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  //Recibe el filtro que le llega desde los botones de la vista y se los pasa al padre por output, quien refresca la lista y se la devuelve por input
  filtrarEntidades(campo3){
    this.filtroSeleccionado.emit(campo3);
  }

  ngOnInit() {
  }

}
