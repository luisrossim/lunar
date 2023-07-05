import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProfileComponent } from './data-profile/data-profile.component';

const routes: Routes = [
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
