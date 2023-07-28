import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService,private router: Router,private toastr: ToastrService) {}

  onLogout(): void {
    
    this.router.navigate(['/login']);
    this.toastr.success('Logout Done');
    this.authService.logout();
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }
}
