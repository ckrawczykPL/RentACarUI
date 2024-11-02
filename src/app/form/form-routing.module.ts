import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditRentCarComponent } from "./edit-rent-car/edit-rent-car.component";
import { AddRentCarComponent } from "./add-rent-car/add-rent-car.component";

const routes: Routes = [
  {
    path: 'add-rent-car',
    component: AddRentCarComponent
  },
  {
    path: 'edit-rent-car/:id',
    component: EditRentCarComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class FormRoutingModule {}
