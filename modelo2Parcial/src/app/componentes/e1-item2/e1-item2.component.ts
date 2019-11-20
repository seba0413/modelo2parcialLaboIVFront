import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Entidad12Service } from 'src/app/servicios/entidad1_2/entidad1-2.service';
import { Entidad } from 'src/app/clases/entidad';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-e1-item2',
  templateUrl: './e1-item2.component.html',
  styleUrls: ['./e1-item2.component.css']
})
export class E1Item2Component implements OnInit {

  idItem2: number;
  entidad1Item2: Entidad; 
  listadoEnt2: Array<any>;

  constructor(private rutaActiva: ActivatedRoute, private entidadService:Entidad1Service, private entidad1_2Service: Entidad12Service,
    private router: Router) { }

  recibeIdEntidad1(event){
    if(event) {
      this.entidad1_2Service.ListarEntidad1_2(this.idItem2).subscribe(respuesta => {
        this.listadoEnt2 = respuesta; 
      })
    }
  }

  cerrarSesion(){
    Swal.fire({
      title: 'Cerrar sesion',
      text: "¿Seguro queres cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    })
  }

  ngOnInit() {
    this.idItem2 = this.rutaActiva.snapshot.params.idItem2;
    this.entidadService.ObtenerEntidad(this.idItem2).subscribe(respuesta => {this.entidad1Item2 = respuesta});
    this.entidad1_2Service.ListarEntidad1_2(this.idItem2).subscribe(respuesta => {
      this.listadoEnt2 = respuesta; 
    })
  }

}
