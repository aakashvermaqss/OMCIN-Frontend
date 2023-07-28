// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  isLoggedIn: boolean = false;

  //login APIs

  login(data:any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/auth/login';

    return this.http.post(apiUrl,data).pipe(
      catchError((error: any) => {
        alert("Please enter correct Login Credentials");
        return throwError(() => new Error(error));
      })
    );
  }


  loginAuth(token:any): boolean {
    if(token)
    {
      this.isLoggedIn = true;
      sessionStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('loggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || sessionStorage.getItem('loggedIn') === 'true';
  }
}
