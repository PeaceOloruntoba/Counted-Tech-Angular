import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAbsentComponent } from './card-absent.component';

describe('CardAbsentComponent', () => {
  let component: CardAbsentComponent;
  let fixture: ComponentFixture<CardAbsentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAbsentComponent]
    });
    fixture = TestBed.createComponent(CardAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
