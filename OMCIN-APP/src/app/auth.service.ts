// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(username: string, password: string): boolean {
    // Implement your authentication logic here, e.g., checking username and password
    if (username === 'john@example.com' && password === 'password123') {
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
