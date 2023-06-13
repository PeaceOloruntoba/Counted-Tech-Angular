import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintsComponent } from './imprints.component';

describe('ImprintsComponent', () => {
  let component: ImprintsComponent;
  let fixture: ComponentFixture<ImprintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintsComponent]
    });
    fixture = TestBed.createComponent(ImprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
