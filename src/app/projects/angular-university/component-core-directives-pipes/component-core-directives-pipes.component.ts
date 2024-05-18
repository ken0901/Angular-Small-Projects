import { Component, ViewChild } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-component-core-directives-pipes',
  templateUrl: './component-core-directives-pipes.component.html',
  styleUrls: ['./component-core-directives-pipes.component.css']
})
export class ComponentCoreDirectivesPipesComponent {
  
  courses = [...COURSES];

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  startDate = new Date();
  title = COURSES[0].description;
  price: number = 9.995646;
  rate: number = 0.67;

  course = COURSES[0];

  onCourseSelected(course: Course) {
    console.log("app component - button clicked", course);
    console.log(this.card);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
