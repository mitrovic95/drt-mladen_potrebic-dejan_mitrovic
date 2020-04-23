import { Course } from './../models/Course';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[course-item]',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() editEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteEvent.emit(this.course.id);
  }

  edit() {
    this.editEvent.emit(this.course);
  }

}
