import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceInDepthComponent } from './service-in-depth.component';
import { ServiceInDepthRoutingModule } from './service-in-depth-routing.module';
import { ServiceHighlightedDirective } from './directives/service-highlighted.directive';
import { ServiceNgxUnlessDirective } from './directives/service-ngx-unless.directive';
import { ServiceCourseCardComponent } from './course-card/service-course-card.component';
import { ServiceImageComponent } from './course-image/service-course-image.component';
import { FilterByCategoryPipe } from './pipe/filter-by-category.pipe';


@NgModule({
  declarations: [
    ServiceInDepthComponent,
    ServiceImageComponent,
    ServiceCourseCardComponent,
    ServiceHighlightedDirective,
    ServiceNgxUnlessDirective,
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceInDepthRoutingModule
  ],
  exports: [
    ServiceInDepthComponent
  ]
})
export class ServiceInDepthModule { }
