import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor( private http: HttpClient) { }

  obtenerRandomContact(): Observable<any>{

    return this.http.get('https://randomuser.me/api');
  }

  obtenerRandomContacts(n: number): void{



  }
}
