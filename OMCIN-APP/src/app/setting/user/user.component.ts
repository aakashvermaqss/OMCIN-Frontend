import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data: any[] = [];
  subscription: Subscription | undefined;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.subscription = this.dataService.getEmployeesDetails().subscribe({
      next: (data) => {
        this.data = data;
        console.log(this.data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  onStatusChange(item: any) {
    // When the checkbox is clicked, the value of item.IsActive will be updated automatically.
    // You can use this method to perform any additional actions when the checkbox value changes.
    console.log(item.IsActive); // This will show the updated value of the checkbox (true or false).
  }

  deleteEmployee(){
    
  }

}
