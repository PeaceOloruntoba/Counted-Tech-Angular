import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeAvailableComponent } from './add-employee-available.component';

describe('AddEmployeeAvailableComponent', () => {
  let component: AddEmployeeAvailableComponent;
  let fixture: ComponentFixture<AddEmployeeAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeAvailableComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
