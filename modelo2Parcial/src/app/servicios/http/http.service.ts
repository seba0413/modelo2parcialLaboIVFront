import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('Token')
    })
  };

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {   }

  public httpPost0( metodo: string, objeto: any): Observable<any> {debugger
    return this.http.post(this.url + metodo, JSON.stringify(objeto), this.httpOptions)
    .pipe(respuesta => respuesta)
  }

  public httpGet0( metodo: string): Observable<any> {
    return this.http.get(this.url + metodo)
    .pipe(respuesta => respuesta)
  }
}
