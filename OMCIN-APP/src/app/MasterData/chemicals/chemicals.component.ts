import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
//import * as XLSX from 'xlsx';
//import { saveAs } from 'file-saver';


@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.css']
})
export class ChemicalsComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] =[];
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.subscription = this.dataService.getChemicalDetails().subscribe({
      next: (data) => {
        console.log(data);
        this.data=data;
        console.log(this.data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  sortedColumn: string = '';
  sortDirection: number = 1;

  sortData(column: string): void {
    if (column === 'expiration' || column === 'listPrice') {
      if (this.sortedColumn === column) {
        this.sortDirection = -this.sortDirection;
      } else {
        this.sortedColumn = column;
        this.sortDirection = 1;
      }

      this.data.sort((a, b) => {
        if (a[column] > b[column]) return this.sortDirection;
        if (a[column] < b[column]) return -this.sortDirection;
        return 0;
      });
    }
  }

  // exportToExcel(): void {
  //   // Define the Excel file name
  //   const fileName = 'data.xlsx';
  
  //   // Define the sheet name
  //   const sheetName = 'Sheet 1';
  
  //   // Create the workbook and worksheet
  //   const workbook = XLSX.utils.book_new();
  //   const worksheet = XLSX.utils.table_to_sheet(document.getElementById('tableId'));
  
  //   // Add the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
  //   // Generate the Excel file
  //   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
  //   // Save the file
  //   const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //   saveAs(blob, fileName);
  // }
  
}

