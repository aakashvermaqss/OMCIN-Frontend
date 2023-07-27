import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AddChemicalComponent } from './MasterData/add-chemical/add-chemical.component';
import { EditchemicalComponent } from './MasterData/editchemical/editchemical.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatSliderModule } from '@angular/material/slider';
import { EditCompanyComponent } from './MasterData/edit-company/edit-company.component';
import { AddCompanyComponent } from './MasterData/add-company/add-company.component';
import { CurrencyComponent } from './setting/currency/currency.component';
import { UserComponent } from './setting/user/user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanydialogComponent } from './MasterData/company/companydialog/companydialog.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TwofactorauthenticationComponent,
    CompanyComponent,
    ChemicalsComponent,
    QuotationComponent,
    QuotationdetailComponent,
    OrderComponent,
    OrderdetailComponent,
    EmployeeComponent,
    SettingComponent,
    AddChemicalComponent,
    EditchemicalComponent,
    MyDialogComponent,
    EditCompanyComponent,
    AddCompanyComponent,
    CurrencyComponent,
    UserComponent,
    CompanydialogComponent,
    SidebarmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
