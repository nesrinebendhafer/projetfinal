import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Act } from '../classes/act';

const URL="http://localhost:3000/events";
@Injectable({
  providedIn: 'root'
})
export class ActService {

  constructor(private http:HttpClient) { }
  public getAct(): Observable<Act[]>{
    return this.http.get<Act[]>(URL);
  }

  public addAct(a:Act): Observable<Act>{
    return this.http.post<Act>(URL, a);
  }
  public deleteAct(id:number){
    return this.http.delete(URL+"/"+id);
  }
}
