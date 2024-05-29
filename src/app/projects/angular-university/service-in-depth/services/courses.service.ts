import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ServiceCourse } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadCourses(): Observable<ServiceCourse[]> {
    const params = new HttpParams()
      .set("page", "1", )
      .set("pageSize", "10");

    return this.http.get<ServiceCourse[]>('/api/courses', {params});
  }

  saveCourse(course: ServiceCourse) {
    const headers = new HttpHeaders()
      .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
