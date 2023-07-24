import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})

export class AddCompanyComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] = [];
  company: any = {};
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  saveCompanyData(data: any) {
    console.log(data);
    this.subscription = this.dataService.putCompanyDetails(data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(chemicalData: any) {
    this.data.push(this.company);
    this.saveCompanyData(this.data);
  }
}

