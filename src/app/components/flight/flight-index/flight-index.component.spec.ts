import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightIndexComponent } from './flight-index.component';

describe('FlightIndexComponent', () => {
  let component: FlightIndexComponent;
  let fixture: ComponentFixture<FlightIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightIndexComponent]
    });
    fixture = TestBed.createComponent(FlightIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
