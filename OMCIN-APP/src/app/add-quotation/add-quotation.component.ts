import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuotationService } from '../services/quotation.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.css']
})
export class AddQuotationComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] = [];
  quotation: any = {}; // Define an object to hold the quotation data
  chemicalData: any[] = []; // Define an array to hold the list of chemicals/items
  allChemicals: any[] = []; // Define an array to store all chemicals (from a service or API)
  filteredChemicals: any[] = [];
  searchQuery: string = '';
  quotationNo: string = "hello";

  constructor(private quotationService: QuotationService, private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.getChemicalDetails().subscribe({
      next: (data) => {
        this.allChemicals = data;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.generateQuotationNumber();

  }
  generateRandomNumber(length: number): string {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  generateQuotationNumber() {
    const currentDate = new Date().getTime();
    const randomNumber = this.generateRandomNumber(9);
    this.quotation.QuotationNo = `${currentDate}${randomNumber}`;
    this.quotationNo=this.quotation.QuotationNo;
  }



  saveQuotationData(data: any) {
    this.subscription = this.quotationService.putQuotationDetails(data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(quotationData: any) {
    this.data.push(this.quotation);
    this.saveQuotationData(this.data);
  }

  selectRow() {

  }

  selectAllRows() {

  }

  calculateTotal(item: any) {
    item.Total = item.Quantity * item.UnitPrice - item.Discount;
  }

  calculateGrandTotal() {
    this.quotation.GrandTotal = this.quotation.SubTotal + this.quotation.SGST + this.quotation.CGST;
  }

  sendForReview() {
  }


  convertToOrder() {

  }


  editQuotation() {

  }


  addNewItem() {
    // Create a new chemical object with initial values
    const newChemical = {
      Chemical: '',
      Brand: '',
      Description: '',
      UnitPrice: 0,
      Quantity: 0,
      SalePrice: 0,
      Discount: 0,
      Total: 0,
    };

    // Add the new chemical item to the chemicalData array
    this.chemicalData.push(newChemical);
  }


  filterChemicals() {
    if (this.searchQuery != "") {
      this.filteredChemicals = this.allChemicals.filter(
        (chemical) =>
          chemical.ChemicalName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          chemical.Brand.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    else {
      this.quotation.searchQuery = '';
      this.filteredChemicals = [];
    }

  }

  selectChemical(chemical: any) {
    console.log(chemical);
    const newChemical = {
      QuotationNo: this.quotation.QuotationNo,
      Chemical: '',
      Brand: '',
      Description: '',
      UnitPrice: 0,
      Quantity: 0,
      SalePrice: 0,
      Discount: 0,
      Total: 0,
    };

    this.chemicalData.push({ ...chemical });
    this.quotation.searchQuery = '';
    this.filteredChemicals = [];
  }

}
