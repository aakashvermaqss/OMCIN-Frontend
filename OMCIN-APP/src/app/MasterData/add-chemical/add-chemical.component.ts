import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-add-chemical',
  templateUrl: './add-chemical.component.html',
  styleUrls: ['./add-chemical.component.css']
})
export class AddChemicalComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] = [];
  chemical: any = {};
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  saveChemicalData(data: any) {
    this.subscription = this.dataService.putChemicalDetails(data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(chemicalData: any) {
    const ListPrice = this.chemical.ListPrice;
    const SurchargePrice = (ListPrice / 9.54);
    this.chemical.SurchargePrice = SurchargePrice;
    this.data.push(this.chemical);
    this.saveChemicalData(this.data);
  }
}
