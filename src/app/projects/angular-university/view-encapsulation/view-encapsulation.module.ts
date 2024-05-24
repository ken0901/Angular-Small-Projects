import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewCourseImageComponent } from './course-image/view-course-image.component';
import { ViewCourseCardComponent } from './course-card/view-course-card.component';


@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewCourseImageComponent,
    ViewCourseCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ViewEncapsulationComponent,
    ViewCourseImageComponent,
    ViewCourseCardComponent
  ]
})
export class ViewEncapsulationModule { }
