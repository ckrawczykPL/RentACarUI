import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2015 },
    { brand: 'Ford', model: 'Focus', year: 2018 },
    { brand: 'Honda', model: 'Civic', year: 2020 },
    { brand: 'BMW', model: 'X5', year: 2021 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
