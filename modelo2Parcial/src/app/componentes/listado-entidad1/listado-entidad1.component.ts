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

  filtrarEntidades(campo3){debugger
    this.filtroSeleccionado.emit(campo3);
  }

  ngOnInit() {
  }

}
