import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service-course-image',
  templateUrl: './service-course-image.component.html',
  styleUrl: './service-course-image.component.css'
})
export class ServiceImageComponent implements OnInit {
  @Input('src')
  imageUrl:string;

  constructor() { }

  ngOnInit() {
  }
}
