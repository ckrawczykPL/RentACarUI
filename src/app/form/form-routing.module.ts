import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRentCarComponent } from "./form-rent-car/form-rent-car.component";

const routes: Routes = [
  {
    path: 'form-rent-car',
    component: FormRentCarComponent
  },
  {
    path: 'form-rent-car/:id',
    component: FormRentCarComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class FormRoutingModule {}
