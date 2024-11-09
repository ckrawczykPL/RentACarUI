import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../helpers/api.service";

@Component({
  selector: 'app-form-rent-car',
  templateUrl: './form-rent-car.component.html',
  styleUrls: ['./form-rent-car.component.css']
})
export class FormRentCarComponent implements OnInit {
  rentCarForm: FormGroup;
  isEditMode: boolean = false;
  brands: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  vehicleId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.rentCarForm = this.fb.group({
      brand: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      vin: ['', [Validators.required, Validators.minLength(17)]],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAddress: ['', Validators.required],
      isCurrentlyRented: [false],
      currentLocationAddress: ['']
    });
  }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    if (this.vehicleId) {
      this.isEditMode = true;
      this.loadVehicle(this.vehicleId);
    }
    this.getBrands();
  }

  getBrands(): void {
    this.loading = true;
    this.error = false;
    this.apiService.get('/brand/list').subscribe({
      next: (data) => {
        this.brands = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
        alert('Wystąpił błąd podczas ładowania marek.');
      }
    });
  }

  loadVehicle(id: string): void {
    this.loading = true;
    this.error = false;
    this.apiService.get(`/vehicle/read/${id}`).subscribe({
      next: (data) => {
        console.log(data);
        this.rentCarForm.patchValue({
          brand: data.brand.id,
          registrationNumber: data.registrationNumber,
          vin: data.vin,
          clientEmail: data.clientEmail,
          clientAddress: data.clientAddress,
          isCurrentlyRented: data.currentlyRented,
          currentLocationAddress: data.currentLocationAddress
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
        alert('Wystąpił błąd podczas ładowania pojazdu.');
      }
    });
  }

  onSubmit(): void {
    if (this.rentCarForm.valid) {
      const formValue = this.rentCarForm.value;
      if (this.isEditMode) {
        this.updateVehicle(formValue);
      } else {
        this.addVehicle(formValue);
      }
    }
  }

  updateVehicle(formValue: any): void {
    this.loading = true;
    this.error = false;
    this.apiService.put(`/vehicle/update/${this.vehicleId}`, formValue).subscribe({
      next: (response) => {
        this.loading = false;
        this.router.navigateByUrl('/');
        alert('Pojazd zaktualizowany pomyślnie');
      },
      error: () => {
        this.loading = false;
        this.error = true;
        alert('Wystąpił błąd podczas aktualizacji pojazdu.');
      }
    });
  }

  addVehicle(formValue: any): void {
    this.loading = true;
    this.error = false;
    this.apiService.post('/vehicle/create', formValue).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/');
        alert('Pojazd dodany pomyślnie');
      },
      error: () => {
        this.loading = false;
        this.error = true;
        alert('Wystąpił błąd podczas dodawania pojazdu.');
      }
    });
  }
}
