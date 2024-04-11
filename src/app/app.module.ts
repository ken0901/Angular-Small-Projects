import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './projects/appointment-project/appointment-module/appointment-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppointmentModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
