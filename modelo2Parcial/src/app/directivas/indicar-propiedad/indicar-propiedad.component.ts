import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: '[app-indicar-propiedad]',
  templateUrl: './indicar-propiedad.component.html',
  styleUrls: ['./indicar-propiedad.component.css']
})
export class IndicarPropiedadComponent implements OnInit {

  @Input() campo3;

  constructor(private elemRef: ElementRef) { }

  indicarProp(){
    if(this.campo3 > 0){
      this.elemRef.nativeElement.textContent = 'SI';
    }
    else{
      this.elemRef.nativeElement.textContent = 'NO';
    }
  }

  ngOnInit() {
    this.indicarProp();
  }

}
