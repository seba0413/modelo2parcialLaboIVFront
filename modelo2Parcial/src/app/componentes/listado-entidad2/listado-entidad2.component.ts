import { Component, OnInit, Input } from '@angular/core';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';
import { Entidad2 } from '../../clases/entidad2';

@Component({
  selector: 'app-listado-entidad2',
  templateUrl: './listado-entidad2.component.html',
  styleUrls: ['./listado-entidad2.component.css']
})
export class ListadoEntidad2Component implements OnInit {

  //Este componente solo muestra las materias/entidad2 dadas de alta, las cuales recibe por input desde el componente admin

  @Input() listadoEntidades2: Array<Entidad2>;

  constructor() { }

  ngOnInit() {

  } 

}
