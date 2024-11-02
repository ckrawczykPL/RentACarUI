import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCarsComponent} from "./list-cars/list-cars.component";

const routes: Routes = [
  {
    path: '',
    component: ListCarsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class ListRoutingModule {}
