import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../helpers/api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-list-cars',
    templateUrl: './list-cars.component.html',
    styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
    public cars = [];
    public loading = true;
    public error = false;

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
        this.getVehicles();
    }

    getVehicles(): void {
        this.loading = true;
        this.error = false;
        this.apiService.get('/vehicle/list').subscribe({
            next: (data) => {
                this.cars = data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.error = true;
                alert('Wystąpił błąd podczas ładowania pojazdów.');
            }
        });
    }

    editVehicle(carId: number) {
        this.router.navigate(['/form-rent-car', carId]);
    }

    deleteVehicle(id: number): void {
        const confirmed = confirm('Czy na pewno chcesz usunąć pojazd o ID: ' + id + '?');
        if (confirmed) {
            this.apiService.delete(`/vehicle/delete/${id}`).subscribe({
                next: () => {
                    alert('Pojazd usunięty: ' + id);
                    this.getVehicles();
                },
                error: () => {
                    alert('Błąd podczas usuwania pojazdu');
                }
            });
        } else {
            alert('Usuwanie pojazdu anulowane.');
        }
    }

    reloadVehicles() {
        this.getVehicles();
    }
}
