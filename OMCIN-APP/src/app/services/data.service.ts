import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  //login APIs

  getLoginData(email: string, password: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/data?email=${email}&password=${password}`;

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  //chemicals APIs

  getChemicalDetails(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/chemicals/getChemicals';

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  putChemicalDetails(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/chemicals/putChemicals';

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  editChemicalDetails(data: any,chemicalId:string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/chemicals/putChemicals/${chemicalId}`;

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  deleteChemicalDetails(chemicalId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/chemicals/deleteChemicals/${chemicalId}`;

    return this.http.delete(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }
}
