import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  constructor(private elemRef: ElementRef){}

  transform(value: any, param:number): any {
    if(!value) return "Sin nota";
    if(value > 6)
      return value = 'Promocionado';
    else if(value > 3)
      return value = 'Aprobado';
    else
      return value = 'Desaprobado';
  }
}
