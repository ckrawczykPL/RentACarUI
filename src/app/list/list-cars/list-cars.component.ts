import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../helpers/api.service";

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
    public cars = [];
    public loading = true;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getVehicles();
  }

    getVehicles(): void {
        this.apiService.get('/vehicle/list')
            .subscribe({
                next: (data) => {
                    this.cars = data;
                    this.loading = false;
                },
                error: () => {
                }
            });
    }

    deleteVehicle(id: number): void {
        const confirmed = confirm('Czy na pewno chcesz usunąć pojazd o ID: ' + id + '?');

        if (confirmed) {
            this.apiService.delete(`/vehicle/delete/${id}`).subscribe({
                next: () => {
                    alert('Pojazd usunięty: ' + id);
                    this.getVehicles();
                },
                error: (err) => {
                    alert('Błąd podczas usuwania pojazdu');
                }
            });
        } else {
            alert('Usuwanie pojazdu anulowane.');
        }
    }

}
