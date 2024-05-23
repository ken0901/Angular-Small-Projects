import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesInDepthComponent } from './directives-in-depth.component';
import { DirectivesInDepthRoutingModule } from './directives-in-depth-routing.module';
import { DirectivesCourseCardComponent } from './course-card/directives-course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';


@NgModule({
  declarations: [
    DirectivesInDepthComponent,
    DirectivesCourseCardComponent,
    CourseImageComponent,
    HighlightedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DirectivesInDepthRoutingModule,
  ],
  exports: [
    DirectivesInDepthComponent
  ]
})
export class DirectivesInDepthModule { }
