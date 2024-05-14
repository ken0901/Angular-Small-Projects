import { Component } from '@angular/core';
import { COURSES } from 'src/data/db-data';

@Component({
  selector: 'app-component-core-directives-pipes',
  templateUrl: './component-core-directives-pipes.component.html',
  styleUrls: ['./component-core-directives-pipes.component.css']
})
export class ComponentCoreDirectivesPipesComponent {
  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngRxCourse = COURSES[2];
}
