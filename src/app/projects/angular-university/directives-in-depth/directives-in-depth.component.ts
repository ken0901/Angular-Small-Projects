import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { DirectivesCourse } from './model/course';
import { DirectivesCourseCardComponent } from './course-card/directives-course-card.component';


@Component({
  selector: 'directives-in-depth',
  templateUrl: './directives-in-depth.component.html',
  styleUrls: ['./directives-in-depth.component.css']
})
export class DirectivesInDepthComponent implements AfterViewInit{
  
  courses = COURSES;

  @ViewChildren(DirectivesCourseCardComponent, {read: ElementRef})
  cards : QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {

  }

  onCourseSelected(course:DirectivesCourse) {

  }
}
