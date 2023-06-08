import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOverviewComponent } from './location-overview.component';

describe('LocationOverviewComponent', () => {
  let component: LocationOverviewComponent;
  let fixture: ComponentFixture<LocationOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationOverviewComponent]
    });
    fixture = TestBed.createComponent(LocationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
