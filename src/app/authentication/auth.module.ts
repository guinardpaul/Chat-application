import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// Modules
import { AppMaterialModule } from '../shared/modules/app-material/app-material.module';
// Components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
