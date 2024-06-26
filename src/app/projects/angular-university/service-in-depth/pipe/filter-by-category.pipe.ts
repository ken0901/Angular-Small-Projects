import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../component-core-directives-pipes/model/course';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(courses: Course[], category: string) {
    return courses.filter(course => course.category === category);
  }

}
