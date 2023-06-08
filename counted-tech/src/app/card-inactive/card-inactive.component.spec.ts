import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInactiveComponent } from './card-inactive.component';

describe('CardInactiveComponent', () => {
  let component: CardInactiveComponent;
  let fixture: ComponentFixture<CardInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInactiveComponent]
    });
    fixture = TestBed.createComponent(CardInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
