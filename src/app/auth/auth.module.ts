import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthFormComponent} from './auth-form/auth-form.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,

  ]
})
export class AuthModule {
}
