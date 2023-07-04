import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {

  }

  email: string="";
  password: string="";

  onLogin() {
    // Add your login logic here
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    if(this.email!=null&&this.email!=""&&this.password!=null&&this.password=="")
    {
    }
  }

}
