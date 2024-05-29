import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/data/db-data';
import { Course } from '../component-core-directives-pipes/model/course';
import { CoursesService } from './services/courses.service';

export interface coursesType {
  payload: []
}

@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css']
})
export class ServiceInDepthComponent implements OnInit{
  
  courses$: Observable<Course[]>;
  courses;

  constructor(private http: HttpClient,
              private coursesService: CoursesService
  ) {

  }

  ngOnInit() {
    const params = new HttpParams()
      .set("page", "1", )
      .set("pageSize", "10");

    this.courses$ = this.http.get<Course[]>('/api/courses', {params});
    this.http.get('/api/courses', {params})
      .subscribe(
        val => this.courses = val
    );
  }
}
