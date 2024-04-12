import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './projects/appointment-project/appointment-module/appointment-module.module';
import { BookManagementSystemModule } from './projects/book-management-system/module/book-management-system.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppointmentModule,
        BookManagementSystemModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
