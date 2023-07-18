import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.css']
})
export class ChemicalsComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] = [];
  ExcelData: any[] = [];
  chemical: any = {};
  searchTerm: string = '';
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.subscription = this.dataService.getChemicalDetails().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  saveChemicalData(data: any): void {
    console.log(data);
    this.subscription = this.dataService.putChemicalDetails(data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm() {
    const ListPrice=this.chemical.ListPrice;
    const SurchargePrice=(ListPrice/9.54);
    this.chemical.SurchargePrice=SurchargePrice;
    this.ExcelData.push(this.chemical);
    this.data = this.data.concat(this.ExcelData);
    this.saveChemicalData(this.ExcelData);
  }
  
  deleteChemicalData(chemicalId: string){
    console.log(chemicalId);
    this.subscription = this.dataService.deleteChemicalDetails(chemicalId).subscribe({
      next: (response) => {
        this.data = this.data.filter(item => item.ChemicalId !== chemicalId);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  sortedColumn: string = '';
  sortDirection: number = 1;

  sortData(column: string): void {
    if (column === 'Expiration' || column === 'ListPrice') {
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

  exportToExcel(): void {
    // Define the Excel file name
    const fileName = 'ChemicalData.xlsx';

    // Define the sheet name
    const sheetName = 'Chemicals';

    // Create the workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.table_to_sheet(document.getElementById('tableId'));

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Generate the Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Save the file
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, fileName);
  }

  ReadExcel(event: any): void {
    let file = event?.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      const buffer = new Uint8Array(fileReader.result as ArrayBuffer);
      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheetNames = workbook.SheetNames;
      const worksheet = workbook.Sheets[sheetNames[0]];

      this.ExcelData = XLSX.utils.sheet_to_json(worksheet);
      this.data = this.data.concat(this.ExcelData);
      this.saveChemicalData(this.ExcelData);

    };

    fileReader.readAsArrayBuffer(file);
  }

  search() {
    if(this.searchTerm){
      this.subscription = this.dataService.getSearchedChemicals(this.searchTerm).subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
    else{
      this.ngOnInit();
    }
  }
}

