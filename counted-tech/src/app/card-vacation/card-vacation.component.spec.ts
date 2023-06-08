import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVacationComponent } from './card-vacation.component';

describe('CardVacationComponent', () => {
  let component: CardVacationComponent;
  let fixture: ComponentFixture<CardVacationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVacationComponent]
    });
    fixture = TestBed.createComponent(CardVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
