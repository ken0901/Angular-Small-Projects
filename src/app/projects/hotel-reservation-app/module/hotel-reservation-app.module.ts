import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelReservationAppComponent } from '../hotel-reservation-app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';



@NgModule({
  declarations: [
    HotelReservationAppComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ReservationModule
  ],
  exports: [
    HotelReservationAppComponent
  ]
})
export class HotelReservationAppModule { }
