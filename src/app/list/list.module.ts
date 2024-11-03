import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarsComponent } from './list-cars/list-cars.component';
import {LoadingModule} from "ngx-loading";

@NgModule({
  declarations: [ListCarsComponent],
  imports: [
    CommonModule,
    LoadingModule
  ]
})
export class ListModule { }
