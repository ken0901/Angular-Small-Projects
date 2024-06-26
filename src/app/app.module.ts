import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './projects/appointment-project/appointment-module/appointment-module.module';
import { BookManagementSystemModule } from './projects/book-management-system/module/book-management-system.module';
import { HotelReservationAppModule } from './projects/hotel-reservation-app/module/hotel-reservation-app.module';
import { PaintingAppModule } from './projects/painting-app/painting-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookManagementModule } from './projects/ngrx-book-management/book-management.module';
import { SocialPlatformModule } from './projects/social-platform/social-platform.module';
import { SocialAppModule } from './projects/social-app/social-app.module';
import { ComponentCoreDirectivesPipesModule } from './projects/angular-university/component-core-directives-pipes/component-core-directives-pipes.module';
import { DirectivesInDepthModule } from './projects/angular-university/directives-in-depth/directives-in-depth.module';
import { ViewEncapsulationModule } from './projects/angular-university/view-encapsulation/view-encapsulation.module';
import { ServiceInDepthModule } from './projects/angular-university/service-in-depth/service-in-depth.module';

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
        BrowserAnimationsModule,
        // BookManagementModule,
        SocialPlatformModule,
        SocialAppModule,
        ComponentCoreDirectivesPipesModule,
        DirectivesInDepthModule,
        ViewEncapsulationModule,
        ServiceInDepthModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
