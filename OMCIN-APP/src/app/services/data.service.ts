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
  
  //chemicals APIs

  getChemicalDetails(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/chemicals/getChemicals';

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getSearchedChemicals(searchData: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/chemicals/searchChemicals/${searchData}`;

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getFilteredChemicals(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/chemicals/filterChemicals';

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getChemicalDetailsById(chemicalId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/chemicals/getChemicalById/${chemicalId}`;
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

  editChemicalDetails(data: any, ChemicalId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/chemicals/editChemicalById/${ChemicalId}`;

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

  //company APIs

  getCompanyDetails(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/companies/getCompany';

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getSearchedCompany(searchData: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/companies/searchCompany/${searchData}`;

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getFilteredCompany(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/companies/filterCompany';

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  getCompanyDetailsById(companyId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/companies/getCompanyById/${companyId}`;
    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  putCompanyDetails(data: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/companies/addCompany';

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  editCompanyDetails(data: any, CompanyId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/companies/editCompanyById/${CompanyId}`;

    return this.http.put(apiUrl, data).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  deleteCompanyDetails(companyId: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/companies/deleteCompany/${companyId}`;

    return this.http.delete(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }

  //user APIs

  getEmployeesDetails(): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/employees/getEmployees';

    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error));
      })
    );
  }
}
