import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService,private router: Router) {}

  onLogout(): void {
    
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  cancel(){
    this.router.navigate(['/dashboard']);

    
  }
}
