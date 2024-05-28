import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/data/db-data';


@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css']
})
export class ServiceInDepthComponent implements OnInit{
  
  courses;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const params = new HttpParams()
      .set("page", "1", )
      .set("pageSize", "10");


    this.http.get('/api/courses', {params})
      .subscribe(
        val => this.courses = val
    );
  }
}
