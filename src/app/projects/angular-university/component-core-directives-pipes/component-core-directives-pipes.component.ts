import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

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
    console.log("ngAfterViewInit cards" , this.cards);
    console.log("ngAfterViewInit cards first" , this.cards.first);
    console.log("ngAfterViewInit cards last" , this.cards.last);

    this.cards.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onCoursesEdit() {
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    )
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
