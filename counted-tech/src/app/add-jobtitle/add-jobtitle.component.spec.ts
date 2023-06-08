import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobtitleComponent } from './add-jobtitle.component';

describe('AddJobtitleComponent', () => {
  let component: AddJobtitleComponent;
  let fixture: ComponentFixture<AddJobtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobtitleComponent]
    });
    fixture = TestBed.createComponent(AddJobtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
