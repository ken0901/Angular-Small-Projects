import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-component-core-directives-pipes',
  templateUrl: './component-core-directives-pipes.component.html',
  styleUrls: ['./component-core-directives-pipes.component.css']
})
export class ComponentCoreDirectivesPipesComponent implements AfterViewInit{
  
  courses = [...COURSES];

  @ViewChild('cardRef', {read: ElementRef})
  card: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  startDate = new Date();
  title = COURSES[0].description;
  price: number = 9.995646;
  rate: number = 0.67;

  course = COURSES[0];

  constructor() {
    console.log("constructor containerDiv" , this.containerDiv);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit containerDiv" , this.containerDiv);
  }

  onCourseSelected(course: Course) {
    console.log("app component - button clicked", course);
    console.log(this.card);
    console.log("containerDiv" , this.containerDiv);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
