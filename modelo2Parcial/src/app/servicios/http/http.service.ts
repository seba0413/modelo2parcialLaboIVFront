import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {   }

  public httpPost0( metodo: string, objeto: any): Observable<any> {
    var token = localStorage.getItem('Token');
    return this.http.post(this.url + metodo, JSON.stringify(objeto), {
                                                                        headers: new HttpHeaders({
                                                                          'Content-Type':  'application/json',
                                                                          'Authorization': token
                                                                        })
                                                                      }
    ).pipe(respuesta => respuesta)    
  }

  public httpPostLoginRegistro( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(objeto))
    .pipe(respuesta => respuesta)
  }  

  public httpGet0( metodo: string): Observable<any> {
    return this.http.get(this.url + metodo)
    .pipe(respuesta => respuesta)
  }
}
