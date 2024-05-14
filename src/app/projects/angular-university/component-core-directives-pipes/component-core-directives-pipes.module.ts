import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentCoreDirectivesPipesRoutingModule } from './component-core-directives-pipes-routing.module';
import { ComponentCoreDirectivesPipesComponent } from './component-core-directives-pipes.component';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  declarations: [
    ComponentCoreDirectivesPipesComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ComponentCoreDirectivesPipesRoutingModule
  ],
  exports: [
    ComponentCoreDirectivesPipesComponent
  ]
})
export class ComponentCoreDirectivesPipesModule { }
