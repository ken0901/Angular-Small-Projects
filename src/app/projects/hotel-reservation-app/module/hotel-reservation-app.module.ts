import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelReservationAppComponent } from '../hotel-reservation-app.component';



@NgModule({
  declarations: [
    HotelReservationAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HotelReservationAppComponent
  ]
})
export class HotelReservationAppModule { }
