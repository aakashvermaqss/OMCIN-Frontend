import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
  email: string = '';
  password: string = '';
  token: any;
  rememberMe: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.email = storedUsername;
      this.rememberMe = true;
    }
  }

  onLogin() {
    this.data = { username: this.email, password: this.password };
    if (this.email !== '' && this.password !== '') {
      this.authService.login(this.data).subscribe(
        (response) => {
          console.log('Login successful. Token:', response.token);
          if (this.rememberMe) {
            localStorage.setItem('username', this.email);
            localStorage.setItem('token', response.token);
          } else {
            localStorage.removeItem('username');
          }
          if (response.token) {
            this.authService.loginAuth(response.token)
          }
          this.router.navigate(['/dashboard']);
        }
      );
    }

    else {
      alert("Please enter correct Login Credentials");
    }
  }
}