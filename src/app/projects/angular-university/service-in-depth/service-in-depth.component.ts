import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/data/db-data';
import { Course } from '../component-core-directives-pipes/model/course';
import { CoursesService } from './services/courses.service';
import { ServiceCourse } from './model/course';

export interface coursesType {
  payload: []
}

@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css']
})
export class ServiceInDepthComponent implements OnInit{
  
  courses$: Observable<ServiceCourse[]>;

  constructor(private http: HttpClient,
              private coursesService: CoursesService
  ) {

  }

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
}
