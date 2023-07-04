import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  onLogin() {
    // Add your login logic here
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

}
