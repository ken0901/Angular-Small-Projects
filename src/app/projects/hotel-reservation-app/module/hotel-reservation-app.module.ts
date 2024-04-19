import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelReservationAppComponent } from '../hotel-reservation-app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { HotelReservationAppRoutingModule } from './hotel-reservation-app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HotelReservationAppComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ReservationModule,
    HotelReservationAppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HotelReservationAppComponent
  ]
})
export class HotelReservationAppModule { }
