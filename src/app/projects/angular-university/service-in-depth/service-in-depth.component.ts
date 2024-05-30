import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { ServiceCourse } from './model/course';
import { HttpClient } from '@angular/common/http';

function coursesServiceProvider(http:HttpClient): CoursesService {
  return new CoursesService(http);
}

const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css'],
  providers: [
    {provide: COURSES_SERVICE, useFactory: coursesServiceProvider, deps: [HttpClient]}
  ]
})
export class ServiceInDepthComponent implements OnInit{
  
  courses$: Observable<ServiceCourse[]>;

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
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
