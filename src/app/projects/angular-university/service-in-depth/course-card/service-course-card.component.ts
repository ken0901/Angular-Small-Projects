import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceCourse } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'service-course-card',
  templateUrl: './service-course-card.component.html',
  styleUrls: ['./service-course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCourseCardComponent implements OnInit{
    @Input()
    course: ServiceCourse;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<ServiceCourse>();

    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {
      console.log("coursesService course card" , this.coursesService.id);
    }

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }

    onTitleChange(newTitle: string) {
      this.course.description = newTitle;
    }
}
