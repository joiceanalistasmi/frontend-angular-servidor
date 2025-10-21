import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questao } from '../models/questao'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestaoServices {
  
   http = inject(HttpClient);

  API = environment.SERVIDOR+'/api/carro';

  constructor() { }

   findAll(): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.API+'/findAll');
  }


  findById(id: number):Observable<Questao> {
     return this.http.get<Questao>(this.API+'/findById/'+id); 
  }

  delete(id: number){
    return this.http.get<Questao[]>(this.API+'/deleteById/'+id, {responseType: 'text' as 'json'});
  }

  save(questao: Questao): Observable<string> {
    return this.http.post<string>(this.API+'/save', questao, {responseType: 'text' as 'json'});
  }

  update(questao: Questao, id: number): Observable<string> {
    return this.http.put<string>(this.API+'/update/'+id, questao, {responseType: 'text' as 'json'});
  }

}
