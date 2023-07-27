import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TwofactorauthenticationComponent } from './twofactorauthentication/twofactorauthentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { OrderComponent } from './order/order.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CompanyComponent } from './MasterData/company/company.component';
import { ChemicalsComponent } from './MasterData/chemicals/chemicals.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { QuotationdetailComponent } from './quotationdetail/quotationdetail.component';
import { SettingComponent } from './setting/setting.component';
import { AddChemicalComponent } from './MasterData/add-chemical/add-chemical.component';
import { EditchemicalComponent } from './MasterData/editchemical/editchemical.component';
import { EditCompanyComponent } from './MasterData/edit-company/edit-company.component';
import { AddCompanyComponent } from './MasterData/add-company/add-company.component';
import { CurrencyComponent } from './setting/currency/currency.component';
import { UserComponent } from './setting/user/user.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: SidebarmenuComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'order', component: OrderComponent },
      { path: 'quotation', component: QuotationComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'chemical', component: ChemicalsComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'orderdetail', component: OrderdetailComponent },
      { path: 'quotationdetail', component: QuotationdetailComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'addchemical', component: AddChemicalComponent },
      { path: 'editchemical/:ChemicalId', component: EditchemicalComponent },
      { path: 'editcompany/:CompanyId', component: EditCompanyComponent },
      { path: 'addcompany', component: AddCompanyComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'user', component: UserComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
