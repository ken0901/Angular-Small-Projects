import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './projects/appointment-project/appointment-module/appointment-module.module';
import { BookManagementSystemModule } from './projects/book-management-system/module/book-management-system.module';
import { HotelReservationAppModule } from './projects/hotel-reservation-app/module/hotel-reservation-app.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppointmentModule,
        BookManagementSystemModule,
        HotelReservationAppModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
