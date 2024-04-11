import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AppointmentListComponent,
  ]
})
export class AppointmentModule { }
