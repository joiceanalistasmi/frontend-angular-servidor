import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servidor } from '../models/servidor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private http = inject(HttpClient); 
 // private API = 'http://localhost:8080/api/servidor';  
  private API = `${environment.SERVIDOR}/api/servidor`;

  findAll(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.API}/findAll`);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.API + "/deleteById/" + id, 
            { responseType: 'text' as 'json' });
  }

  save(servidor: Servidor): Observable<string> {
    return this.http.post<string>(this.API + "/save", servidor, { responseType: 'text' as 'json' });
  }

  update(servidor: Servidor, id: number): Observable<string> {
    return this.http.put<string>(this.API + "/update/" + id, servidor, { responseType: 'text' as 'json' });
  }

  findById(id: number): Observable<Servidor> {
    return this.http.get<Servidor>(this.API + "/findById/" + id);
  }
}
