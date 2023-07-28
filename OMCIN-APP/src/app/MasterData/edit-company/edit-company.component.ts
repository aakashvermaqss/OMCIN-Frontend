import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})

export class EditCompanyComponent implements OnInit {
  subscription: Subscription | undefined;
  company:any= {};
  companyId: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.companyId = params['CompanyId'];
    });
    this.getCompanyDetails(this.companyId);

  }

  getCompanyDetails(companyId: any): void {
    this.subscription = this.dataService.getCompanyDetailsById(companyId).subscribe({
      next: (response) => {
        this.company = response; 
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  editCompanyData(updatedCompanyData:any): void {
    console.log(updatedCompanyData);
    this.subscription = this.dataService.editCompanyDetails(updatedCompanyData,this.companyId).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(chemicalData:any){
    this.editCompanyData(this.company[0]);
  }
}


