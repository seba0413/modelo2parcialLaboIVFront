import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';
import { Entidad2 } from '../../clases/entidad2';
import { Entidad1Service } from 'src/app/servicios/entidad1/entidad1.service';
import { Entidad2Service } from 'src/app/servicios/entidad2/entidad2.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listaEntidades: Array<Entidad>;
  listadoEnt2: Array<Entidad2>;
  admin: Entidad;
  idAdmin: number;

  constructor(private entidadService: Entidad1Service, private entidad2Service: Entidad2Service, private rutaActiva: ActivatedRoute,
    private router: Router) {} 

  //Recibe el filtro seleccionado en el componente hijo listado-entidad1 y actualiza la lista de entidades que le pasa por input al hijo  
  recibeFiltroEntidades(campo3){
    this.entidadService.ObtenerEntidades(campo3 + '/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    })
  }

  //Recibe la notificacion de que se dio de alta una materia/entidad2 en el compoenente hijo alta-entidad2 y obtiene la lista actualizada que es 
  //pasada por input al componente hijo 
  recibeNuevaMateria(event){
    if(event){
      this.entidad2Service.ObtenerEntidades2().subscribe(respuesta=>{
        this.listadoEnt2 = respuesta; 
      });
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
    //Obtiene todos los datos que necesita el perfil y se los pasa a los componentes hijos. 
    this.idAdmin = this.rutaActiva.snapshot.params.idAdmin;
    this.entidadService.ObtenerEntidad(this.idAdmin).subscribe(respuesta => { this.admin = respuesta });
    this.entidadService.ObtenerEntidades('todos/').subscribe(respuesta=>{
      this.listaEntidades = respuesta;
    });
    this.entidad2Service.ObtenerEntidades2().subscribe(respuesta=>{
      this.listadoEnt2 = respuesta; 
    })
    this.entidadService.ObtenerEntidad
  }

}
