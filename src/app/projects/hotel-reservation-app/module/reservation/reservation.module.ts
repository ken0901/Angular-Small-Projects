import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from '../../component/reservation/reservation.component';
import { ReservationFormComponent } from '../../component/reservation-form/reservation-form.component';
import { ReservationListComponent } from '../../component/reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ReservationComponent,
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ],
  exports: [
    ReservationComponent,
    ReservationFormComponent,
    ReservationListComponent
  ]
})
export class ReservationModule { }
