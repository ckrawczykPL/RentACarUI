import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCarsComponent} from "./list/list-cars/list-cars.component";

const routes: Routes = [
  {
    path: '',
    component: ListCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
