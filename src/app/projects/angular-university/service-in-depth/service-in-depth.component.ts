import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/data/db-data';

@Component({
  selector: 'service-in-depth',
  templateUrl: './service-in-depth.component.html',
  styleUrls: ['./service-in-depth.component.css']
})
export class ServiceInDepthComponent implements OnInit{
  
  courses = COURSES;

  constructor() {

  }

  ngOnInit() {
  }
}
