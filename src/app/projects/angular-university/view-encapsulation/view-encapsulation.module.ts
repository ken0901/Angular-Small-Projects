import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewCourseImageComponent } from './course-image/view-course-image.component';
import { ViewCourseCardComponent } from './course-card/view-course-card.component';
import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';


@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewCourseCardComponent,
    ViewCourseImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ViewEncapsulationRoutingModule,
  ],
  exports: [
    ViewEncapsulationComponent,
  ]
})
export class ViewEncapsulationModule { }
