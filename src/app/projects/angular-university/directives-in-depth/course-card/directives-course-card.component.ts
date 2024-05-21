import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { DirectivesCourse } from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'directives-course-card',
  templateUrl: './directives-course-card.component.html',
  styleUrls: ['./directives-course-card.component.css']
})
export class DirectivesCourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{
  @Input()
    course: DirectivesCourse;

    @Input()
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<DirectivesCourse>();

    @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<ElementRef>;

    constructor() {

    }
    ngAfterViewInit() {

    }
    ngAfterContentInit() {

    }
    ngOnInit() {
    }
    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {

        this.courseEmitter.emit(this.course);

    }
    cardClasses() {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
        return '';
    }

    cardStyles() {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')'

        };
    }
}
