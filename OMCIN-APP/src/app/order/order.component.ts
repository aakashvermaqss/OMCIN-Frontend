import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuotationService } from '../services/quotation.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  subscription: Subscription | undefined;
  quotation: any;
  data: any[] = [];
  searchTerm: string = '';

  constructor(private quotationSerivce: QuotationService) { }

  ngOnInit() {
    this.subscription = this.quotationSerivce.getQuotation().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  reqDate() {
    // Assuming the input date is stored in a variable called 'inputDate'
    const inputDate = "2023-07-25T18:30:00.000Z";

    // Convert the input date string to a JavaScript Date object
    const dateObject = new Date(inputDate);

    // Create an array to map month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Extract the day, month, and year from the date object
    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth();
    const year = dateObject.getUTCFullYear();

    // Format the date as "dd Month, yyyy"
    const formattedDate = `${day} ${monthNames[month]}, ${year}`;

    // Now 'formattedDate' contains "28 July, 2023"

  }

  search() {

  }

  filterOpenDialog() {

  }

  hideRow() {


  }

  deleteQuotationData(QuotationId: any) {

  }

}
