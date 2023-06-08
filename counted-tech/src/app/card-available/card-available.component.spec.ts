import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvailableComponent } from './card-available.component';

describe('CardAvailableComponent', () => {
  let component: CardAvailableComponent;
  let fixture: ComponentFixture<CardAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAvailableComponent]
    });
    fixture = TestBed.createComponent(CardAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
