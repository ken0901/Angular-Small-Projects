import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { ServiceCourse } from './model/course';
import { COURSES } from 'src/data/db-data';

@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css'],
})
export class ServiceInDepthComponent implements OnInit{
  
  courses = COURSES;

  courses$: Observable<ServiceCourse[]>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses().subscribe(res => {
    //   console.log(res);
    //   this.courses = res;
    // });
    // this.http.get('/api/courses', {params})
    //   .subscribe(
    //     val => this.courses = val
    // );
  }

  save(course:ServiceCourse) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('course saved!')
    );
  }
}
