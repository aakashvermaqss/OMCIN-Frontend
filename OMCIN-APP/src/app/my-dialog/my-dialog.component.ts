import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  filterData = {
    SliderStartValue: '1000',
    SliderEndValue:'5000',
    Expiration: '',
    Currency: ''
  };

  constructor(private dialogRef: MatDialogRef<MyDialogComponent>) {}
  filterGetData(formData: NgForm){
    this.dialogRef.close(formData.value);
  }
  cancel(){
    this.dialogRef.close();
  }
}
