import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { ReservationFormComponent } from '../component/reservation-form/reservation-form.component';
import { ReservationListComponent } from '../component/reservation-list/reservation-list.component';

const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"list", component:ReservationListComponent},
    {path:"new", component:ReservationFormComponent},
    {path:"edit/:id", component: ReservationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HotelReservationAppRoutingModule { }
