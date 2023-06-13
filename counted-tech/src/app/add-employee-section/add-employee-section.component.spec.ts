import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeSectionComponent } from './add-employee-section.component';

describe('AddEmployeeSectionComponent', () => {
  let component: AddEmployeeSectionComponent;
  let fixture: ComponentFixture<AddEmployeeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeSectionComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
