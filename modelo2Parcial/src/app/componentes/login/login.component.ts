import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';
import { Entidad1Service } from '../../servicios/entidad1/entidad1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Entidad1Service]
})
export class LoginComponent implements OnInit {

  entidad: Entidad; 
  arrayCampo3: Array<string>;

  constructor(private entidad1Service: Entidad1Service) { 
    this.entidad = new Entidad();
    this.arrayCampo3 = new Array<string>(); 
    this.arrayCampo3.push('alumno');
    this.arrayCampo3.push('profesor');
    this.arrayCampo3.push('administrador');
  }

  altaEntidad(){debugger
    this.entidad1Service.AltaEntidad(this.entidad).subscribe();
  }



  ngOnInit() {
  }

}
