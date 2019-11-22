import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';
import { Entidad2 } from '../../clases/entidad2';
import { Entidad12Service } from 'src/app/servicios/entidad1_2/entidad1-2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-entidad1-entidad2',
  templateUrl: './alta-entidad1-entidad2.component.html',
  styleUrls: ['./alta-entidad1-entidad2.component.css']
})
export class AltaEntidad1Entidad2Component implements OnInit {

  @Input() idEntidad1: number; 
  @Output() idEntidad2: EventEmitter<any> = new EventEmitter<any>();
  listadoEntidades2: Array<Entidad2>;

  constructor(private entidad2Service: Entidad2Service, private entidad1_2Service: Entidad12Service) { }

  altaEntidad1_2(idEntidad2){
    //Guarda el id de cada entidad en la tabla de relacion entre entidad1item2/alumno y entidad2/materia
    return this.entidad1_2Service.AltaEntidad1_2(this.idEntidad1, idEntidad2).subscribe(respuesta => {
      if(respuesta.Estado == "Ok"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: respuesta.Mensaje,
          showConfirmButton: false,
          timer: 2000
          });
        //Refresca el cupo
        this.entidad2Service.ObtenerEntidades2().subscribe(respuesta => {
          this.listadoEntidades2 = respuesta; 
        })
        //Actualiza el listado de materias en las que esta inscripto
        this.idEntidad2.emit(true);
      }
      else if(respuesta.Estado == "Alerta") {
        Swal.fire({ 
          title: 'Alerta',
          text: respuesta.Mensaje,
          type: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
      }

    })
  }

  ngOnInit() {
    this.entidad2Service.ObtenerEntidades2().subscribe(respuesta => {
      this.listadoEntidades2 = respuesta; 
    })
  }
}
