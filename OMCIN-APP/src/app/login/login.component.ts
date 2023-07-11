import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //data: any[];
  constructor(private router: Router,private http: HttpClient) { }
  ngOnInit() {
    this.onLogin();
  }

  email: string="";
  password: string="";

  onLogin() {
    // Add your login logic here
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    if(this.email!=null&&this.email!=""&&this.password!=null&&this.password=="")
    {
      // this.http.get<any[]>('http://localhost:3000/api/data').subscribe(
      //   response => {
      //     this.data = response;
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );
    }
  }

}
