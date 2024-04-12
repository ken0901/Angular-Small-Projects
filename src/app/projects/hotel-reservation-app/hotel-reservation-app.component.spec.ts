import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationAppComponent } from './hotel-reservation-app.component';

describe('HotelReservationAppComponent', () => {
  let component: HotelReservationAppComponent;
  let fixture: ComponentFixture<HotelReservationAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelReservationAppComponent]
    });
    fixture = TestBed.createComponent(HotelReservationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
