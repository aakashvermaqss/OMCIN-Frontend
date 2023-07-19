import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editchemical',
  templateUrl: './editchemical.component.html',
  styleUrls: ['./editchemical.component.css']
})
export class EditchemicalComponent implements OnInit {
  subscription: Subscription | undefined;
  chemical: any = {};
  chemicalId: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chemicalId = params['ChemicalId'];
    });
    this.getChemicalDetails(this.chemicalId);
  }

  getChemicalDetails(chemicalId: any): void {
    this.subscription = this.dataService.getChemicalDetailsById(chemicalId).subscribe({
      next: (response) => {
        this.chemical = response; 
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  editChemicalData(updatedChemicalData:any): void {
    console.log(updatedChemicalData);
    this.subscription = this.dataService.editChemicalDetails(updatedChemicalData, this.chemicalId).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(chemicalData:any){
    const ListPrice = this.chemical[0].ListPrice;
    const SurchargePrice = ListPrice / 9.54;
    this.chemical[0].SurchargePrice = SurchargePrice;
    this.editChemicalData(this.chemical[0]);
  }
}

