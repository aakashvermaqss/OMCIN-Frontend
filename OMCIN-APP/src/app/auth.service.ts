// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  isLoggedIn: boolean = false;

  //login APIs

  login(data:any): Observable<any> {
    const apiUrl = 'http://localhost:3000/api/auth/login';

    return this.http.post(apiUrl,data).pipe(
      catchError((error: any) => {
        this.toastr.error('Login Failed', 'Incorrect Email/Password');
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
