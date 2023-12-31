import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { LoginComponent } from './login/login.component';
import { TwofactorauthenticationComponent } from './twofactorauthentication/twofactorauthentication.component';
import { CompanyComponent } from './MasterData/company/company.component';
import { ChemicalsComponent } from './MasterData/chemicals/chemicals.component';
import { QuotationComponent } from './quotation/quotation.component';
import { QuotationdetailComponent } from './quotationdetail/quotationdetail.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { EmployeeComponent } from './employee/employee.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarmenuComponent,
    LoginComponent,
    TwofactorauthenticationComponent,
    CompanyComponent,
    ChemicalsComponent,
    QuotationComponent,
    QuotationdetailComponent,
    OrderComponent,
    OrderdetailComponent,
    EmployeeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
