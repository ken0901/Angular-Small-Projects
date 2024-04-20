import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './projects/appointment-project/appointment-module/appointment-module.module';
import { BookManagementSystemModule } from './projects/book-management-system/module/book-management-system.module';
import { HotelReservationAppModule } from './projects/hotel-reservation-app/module/hotel-reservation-app.module';
import { PaintingAppModule } from './projects/painting-app/painting-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppointmentModule,
        BookManagementSystemModule,
        // HotelReservationAppModule,
        PaintingAppModule,
        BrowserAnimationsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
