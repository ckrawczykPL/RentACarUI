import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRentCarComponent } from './add-rent-car/add-rent-car.component';
import { EditRentCarComponent } from './edit-rent-car/edit-rent-car.component';

@NgModule({
  declarations: [AddRentCarComponent, EditRentCarComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
