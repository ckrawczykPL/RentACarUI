import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRentCarComponent } from './form-rent-car.component';

describe('NewRentCarComponent', () => {
  let component: FormRentCarComponent;
  let fixture: ComponentFixture<FormRentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
