import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  private isLoggedIn: boolean = false;

  login(username: string, password: string): boolean {
    // Implement your login logic here, such as verifying user credentials
    // For demo purposes, let's assume the user is authenticated with any non-empty username and password.
    this.isLoggedIn = username !== '' && password !== '';
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}


