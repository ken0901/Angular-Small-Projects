import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { ViewCourse } from './model/course';
import { ViewCourseCardComponent } from './course-card/view-course-card.component';


@Component({
  selector: 'view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css']
})
export class ViewEncapsulationComponent implements AfterViewInit{
  
  courses = COURSES;

  @ViewChildren(ViewCourseCardComponent, {read: ElementRef})
  cards : QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {
  }

  onCourseSelected(course:ViewCourse) {

  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
}
}
