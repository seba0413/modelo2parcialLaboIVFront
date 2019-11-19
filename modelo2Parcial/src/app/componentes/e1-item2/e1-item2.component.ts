import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-e1-item2',
  templateUrl: './e1-item2.component.html',
  styleUrls: ['./e1-item2.component.css']
})
export class E1Item2Component implements OnInit {

  idItem2: number;

  constructor(private rutaActiva: ActivatedRoute) {
    this.idItem2 = this.rutaActiva.snapshot.params.idItem2;
  }

  ngOnInit() {
  }

}
