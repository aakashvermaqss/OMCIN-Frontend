import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
  email: string = '';
  password: string = '';
  token:any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
  }

  onLogin() {
    this.data={username:this.email,password:this.password};
    if (this.email !== '' && this.password !== '') {
      this.dataService.LoginData(this.data).subscribe({
        next: (response) => {
          this.token = response.token;
          console.log(this.token);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
