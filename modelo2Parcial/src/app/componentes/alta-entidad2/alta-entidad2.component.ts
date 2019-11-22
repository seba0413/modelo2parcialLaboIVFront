import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entidad2 } from '../../clases/entidad2';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-entidad2',
  templateUrl: './alta-entidad2.component.html',
  styleUrls: ['./alta-entidad2.component.css']
})
export class AltaEntidad2Component implements OnInit {

  @Output() nuevaMateria: EventEmitter<any> = new EventEmitter<any>();
  entidad2: Entidad2;
  arrayEntidad1Campo1: Array<string>;
  selectedFile = null; 

  constructor(private entidadService: Entidad1Service, private entidad2Service: Entidad2Service) { 
    this.entidad2 = new Entidad2(); 
    this.arrayEntidad1Campo1 = new Array<string>();
  }

  altaEntidad2(){
    if(this.entidad2.campo2 < 1 || this.entidad2.campo2 > 2) {
      this.alertaCampoInvalido('El cuatrimestre solo permite valores 1 y 2');
    }
    else if(this.entidad2.campo3 < 1 || this.entidad2.campo3 > 50) {
      this.alertaCampoInvalido('El cupo permitido es entre 1 y 50');
    }
    else{
      return this.entidad2Service.altaEntidad2(this.entidad2).subscribe(respuesta=>{
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: respuesta.Mensaje,
        showConfirmButton: false,
        timer: 1500
        });

        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);

        this.entidad2Service.GuardarFotoMateria(fd).subscribe();
        this.entidad2 = new Entidad2();
        this.nuevaMateria.emit(true);
      })  
    }
  }    

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  alertaCampoInvalido(mensaje: string){
    Swal.fire({ 
      title: 'Alerta',
      text: mensaje,
      type: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    })
  }

  ngOnInit() {
    //Obtiene los profesores dados de alta en la base que pueden ser seleccionados en el alta de materia
    this.entidadService.ObtenerEntidades('profesor/').subscribe(respuesta => {
      this.arrayEntidad1Campo1 = respuesta
    });
  }
}
