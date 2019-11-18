import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Entidad1Service } from './servicios/entidad1/entidad1.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private servicio: Entidad1Service, private router: Router){}

  canActivate(): boolean {
    if(this.servicio.LoggedIn())
      return true; 
    else
    {
      this.router.navigate(['']);
      return false;
    }  
  }  
}
