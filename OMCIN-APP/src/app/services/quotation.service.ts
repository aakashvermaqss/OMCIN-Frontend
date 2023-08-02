import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(private http: HttpClient) { }

  getQuotation(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/quotations/getQuotations';

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }
  
  putQuotationDetails(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/quotations/addQuotation';

    return this.http.put(apiUrl,data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

}
