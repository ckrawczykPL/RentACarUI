// src/app/form/form.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FormRentCarComponent } from './form-rent-car/form-rent-car.component';
import {FormRoutingModule} from "./form-routing.module";
import {LoadingModule} from "ngx-loading";

@NgModule({
  declarations: [
    FormRentCarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    LoadingModule
  ]
})
export class FormModule { }
