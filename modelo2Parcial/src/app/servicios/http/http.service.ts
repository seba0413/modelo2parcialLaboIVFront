import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public httpPost0( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(objeto), {responseType: 'json'})
    .pipe(respuesta => respuesta)
  }
}
