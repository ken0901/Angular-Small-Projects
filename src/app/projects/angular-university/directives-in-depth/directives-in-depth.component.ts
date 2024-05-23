import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { DirectivesCourse } from './model/course';
import { DirectivesCourseCardComponent } from './course-card/directives-course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';


@Component({
  selector: 'directives-in-depth',
  templateUrl: './directives-in-depth.component.html',
  styleUrls: ['./directives-in-depth.component.css']
})
export class DirectivesInDepthComponent implements AfterViewInit{
  
  courses = COURSES;

  @ViewChildren(DirectivesCourseCardComponent, {read: ElementRef})
  cards : QueryList<ElementRef>;

  @ViewChild(DirectivesCourseCardComponent, {read:HighlightedDirective})
  highlighted: HighlightedDirective;

  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.highlighted);
  }

  onCourseSelected(course:DirectivesCourse) {

  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
}
}
