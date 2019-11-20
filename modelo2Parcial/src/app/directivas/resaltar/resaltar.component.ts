import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-resaltar]',
  templateUrl: './resaltar.component.html',
  styleUrls: ['./resaltar.component.css']
})
export class ResaltarComponent implements OnInit {

  @Input() item;
  @Output() inscripcion: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) { }

  resaltarItem(){
    if(this.item.campo3 > 20) {
      this.el.nativeElement.style.backgroundColor = 'cyan';
    }
    else if(this.item.campo3 > 10) {
      this.el.nativeElement.style.backgroundColor = 'gray';
    }
  }

  inhabilitarBoton(){
    if(this.item.campo3 == 0){
      document.getElementById('btnInscripcion').setAttribute('disabled', 'disabled');
    }
  }

  altaEntidad1_2(idEntidad2){
    this.inscripcion.emit(idEntidad2);
  }

  ngOnInit() {
    this.resaltarItem();
    this.inhabilitarBoton();
  }

}
