import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-entidad2-item3',
  templateUrl: './listado-entidad2-item3.component.html',
  styleUrls: ['./listado-entidad2-item3.component.css']
})
export class ListadoEntidad2Item3Component implements OnInit {

  @Input() listadoEntidad2: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
