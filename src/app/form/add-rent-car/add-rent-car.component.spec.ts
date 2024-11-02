import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentCarComponent } from './add-rent-car.component';

describe('NewRentCarComponent', () => {
  let component: AddRentCarComponent;
  let fixture: ComponentFixture<AddRentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
