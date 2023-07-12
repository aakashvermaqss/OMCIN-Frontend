import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any[] = [];
  email: string = '';
  password: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.onLogin();
  }

  onLogin() {
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    if (this.email !== '' && this.password !== '') {
      this.dataService.getLoginData(this.email, this.password).subscribe({
        next: (response) => {
          this.data = response;
          console.log(this.data);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
