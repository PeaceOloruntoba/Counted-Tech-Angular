import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorklocationComponent } from './add-worklocation.component';

describe('AddWorklocationComponent', () => {
  let component: AddWorklocationComponent;
  let fixture: ComponentFixture<AddWorklocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorklocationComponent]
    });
    fixture = TestBed.createComponent(AddWorklocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
