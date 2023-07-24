import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ChemicalDialogComponentComponent } from 'src/app/chemical-dialog-component/chemical-dialog-component.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  subscription: Subscription | undefined;
  data: any[] = [];
  company: any = {};
  searchTerm: string = '';
  constructor(private dataService: DataService,private dialog: MatDialog) { }
  ngOnInit() {
    this.subscription = this.dataService.getCompanyDetails().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  submitForm(){
    this.subscription = this.dataService.putCompanyDetails(this.data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  deleteCompanyData(companyId: string){
    this.subscription = this.dataService.deleteCompanyDetails(companyId).subscribe({
      next: (response) => {
        this.data = this.data.filter(item => item.CompanyId !== companyId);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  sortedColumn: string = '';
  sortDirection: number = 1;

  sortData(column: string): void {
    if (column === 'CompanyName') {
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

  search() {
    if(this.searchTerm){
      this.subscription = this.dataService.getSearchedCompany(this.searchTerm).subscribe({
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
  
  filterOpenDialog() {
    const dialogRef = this.dialog.open(ChemicalDialogComponentComponent, {
      width: '400px' // Specify the desired width of the dialog
    });

    dialogRef.afterClosed().subscribe((filterData) => {
      if(filterData){
        this.subscription = this.dataService.getFilteredCompany(filterData).subscribe({
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
    });
  }

  selectAllRows(){

  }

  selectRow(){
    
  }
}

