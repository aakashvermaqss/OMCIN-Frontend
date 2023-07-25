import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  userPage:boolean=false;
  currencyPage:boolean=true;

  openCurrency(){
    this.currencyPage=true;
    this.userPage=false;
  }

  openUser(){
    this.currencyPage=false;
    this,this.userPage=true;
  }

  filterOpenDialog(){

  }

  search(){
    
  }

}
