import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IRandomContact, Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor( private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status===0){
      console.error(`Ha ocurrido un error: ${error.error}`)
    }else{
      console.error(`Error en el backend: ${error.status}. El error es: ${error.error} `)
    }

    return throwError(()=> new Error('Error rn la petición de contacto aleatorio')

    )
  }

  obtenerRandomContact(): Observable<Results>{

    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), //Nº de reintentos de peticiones
      catchError(this.handleError) //sacamos error se algo falla
    );
  }

  obtenerRandomContacts(n: number, sexo?: string): Observable<Results>{
    let params: HttpParams = new HttpParams().set("results",n);

    if(sexo){
      params= params.append("gender",sexo);
    }
    return this.http.get<Results>('https://randomuser.me/api', {params: params}).pipe(
      retry(2), //Nº de reintentos de peticiones
      catchError(this.handleError) //sacamos error se algo falla
    );


  }

  /*obtenerRandomContactsPorGenero(n: number, sexo: string): Observable<Results>{
    const params: HttpParams = new HttpParams().set("results",sexo);

    return this.http.get<Results>('https://randomuser.me/api', {params: params}).pipe(
      retry(2), //Nº de reintentos de peticiones
      catchError(this.handleError) //sacamos error se algo falla
    );

  }*/
}
