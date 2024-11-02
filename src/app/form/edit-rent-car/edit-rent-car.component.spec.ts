import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRentCarComponent } from './edit-rent-car.component';

describe('EditRentCarComponent', () => {
  let component: EditRentCarComponent;
  let fixture: ComponentFixture<EditRentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
