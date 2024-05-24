import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { ViewCourse } from '../model/course';
import { ViewCourseImageComponent } from '../course-image/view-course-image.component';

@Component({
  selector: 'view-course-card',
  templateUrl: './view-course-card.component.html',
  styleUrls: ['./view-course-card.component.css']
})
export class ViewCourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{
    @Input()
    course: ViewCourse;

    @Input()
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<ViewCourse>();

    @ContentChildren(ViewCourseImageComponent, {read: ElementRef})
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
