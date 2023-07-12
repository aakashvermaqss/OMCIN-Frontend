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

  getChemicalDetails(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/chemicals';
  
    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        // Handle error if needed
        return throwError(error);
      })
    );
  }

  //getLoginData

  getLoginData(email: string, password: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/data?email=${email}&password=${password}`;
  
    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        // Handle error if needed
        return throwError(error);
      })
    );
  }
  
}
