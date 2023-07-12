import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    DataProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
