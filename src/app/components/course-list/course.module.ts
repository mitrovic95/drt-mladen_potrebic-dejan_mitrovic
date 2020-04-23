import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list.component';
import { CourseService } from './course.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseService]
})
export class CourseModule { }
