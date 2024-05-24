import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'view-course-image',
  templateUrl: './view-course-image.component.html',
  styleUrl: './view-course-image.component.css'
})
export class ViewCourseImageComponent implements OnInit {
  @Input('src')
  imageUrl:string;

  constructor() { }

  ngOnInit() {
  }
}
