import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeLocationComponent } from './add-employee-location.component';

describe('AddEmployeeLocationComponent', () => {
  let component: AddEmployeeLocationComponent;
  let fixture: ComponentFixture<AddEmployeeLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeLocationComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
