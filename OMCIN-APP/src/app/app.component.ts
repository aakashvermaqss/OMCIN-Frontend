import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn:boolean=true;
  constructor(private loginService: LoginService){}
  ngOnInit(){
    this.loginService.isAuthenticated();    
  }
  title = 'OMCIN-APP';
  
  toggleSidenav() {
  }
}
