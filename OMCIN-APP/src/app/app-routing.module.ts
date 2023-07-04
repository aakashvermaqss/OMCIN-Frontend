import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TwofactorauthenticationComponent } from './twofactorauthentication/twofactorauthentication.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'twofactorauthentication',
    component: TwofactorauthenticationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
