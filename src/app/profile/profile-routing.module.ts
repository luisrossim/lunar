import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DataProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
