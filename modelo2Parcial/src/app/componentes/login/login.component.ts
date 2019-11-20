import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';
import { Entidad1Service } from '../../servicios/entidad1/entidad1.service';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Entidad1Service]
})
export class LoginComponent implements OnInit {

  entidadAlta: Entidad; 
  entidadLogin: Entidad;
  arrayCampo3: Array<string>;
  jwtDecoder = new JwtHelperService();

  constructor(private entidad1Service: Entidad1Service, private router: Router) { 
    this.entidadAlta = new Entidad();
    this.entidadLogin = new Entidad(); 
    this.arrayCampo3 = new Array<string>(); 
    this.arrayCampo3.push('alumno');
    this.arrayCampo3.push('profesor');
    this.arrayCampo3.push('administrador');
  }

  loginEntidad(){;
    this.entidad1Service.LoginEntidad(this.entidadLogin).subscribe(respuesta => {
      if(respuesta.Estado == "Error")
      {
        this.alertaUsuarioInvalido(respuesta.Mensaje);
      }
      else
      {
        localStorage.setItem('Token', respuesta.Token);
        var decodeToken = this.jwtDecoder.decodeToken(respuesta.Token);
        localStorage.setItem('Mail', decodeToken.data.campo1);

        if(decodeToken.data.campo3 == 'administrador')
          this.router.navigate(['/admin/' + decodeToken.data.id]);
        if(decodeToken.data.campo3 == 'profesor')
          this.router.navigate(['/item3/' + decodeToken.data.id]);
        if(decodeToken.data.campo3 == 'alumno'){
          this.router.navigate(['/item2/'+ decodeToken.data.id]);
        }
      }
    });
  }

  altaEntidad(){
    this.entidad1Service.AltaEntidad(this.entidadAlta).subscribe(respuesta => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: respuesta.Mensaje,
        showConfirmButton: false,
        timer: 1500
        });
    });
    this.entidadAlta = new Entidad();
  }

  alertaUsuarioInvalido(mensaje: string) {
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
  }

}
