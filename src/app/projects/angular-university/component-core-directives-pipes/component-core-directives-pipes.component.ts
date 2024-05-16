import { Component } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-component-core-directives-pipes',
  templateUrl: './component-core-directives-pipes.component.html',
  styleUrls: ['./component-core-directives-pipes.component.css']
})
export class ComponentCoreDirectivesPipesComponent {
  
  courses = [...COURSES];

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngRxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log("app component - button clicked", course);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
