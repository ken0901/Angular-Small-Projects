import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentCoreDirectivesPipesRoutingModule } from './component-core-directives-pipes-routing.module';
import { ComponentCoreDirectivesPipesComponent } from './component-core-directives-pipes.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ComponentCoreDirectivesPipesComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentCoreDirectivesPipesRoutingModule
  ],
  exports: [
    ComponentCoreDirectivesPipesComponent
  ]
})
export class ComponentCoreDirectivesPipesModule { }
