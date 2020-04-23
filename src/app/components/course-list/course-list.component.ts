import { CourseService } from './course.service';
import { Course } from './models/Course';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseList: Course[] = [];
  public filteredList: Course[] = [];
  public editNewItem: Course;
  private searchValue: string;
  form: FormGroup;

  constructor(public courseService: CourseService, private fb: FormBuilder, ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      courses.forEach(course => {
        let newCourse: Course = course;
        newCourse.durationUnit = course['duration-unit'];
        this.courseList.push(newCourse);
        this.filteredList.push(newCourse);
      });
    })
  }

  delete(id: number) {
    let index = this.courseList.findIndex(obj => obj.id == id);
    this.courseList.splice(index, 1);
    this.filteredList = this.courseList;
  }

  edit(course: Course) {
    this.editNewItem = course;
    this.createForm(course);
  }

  createForm(course?: Course) {
    if (!course) course = new Course(0, null, null, null, null);

    this.form = this.fb.group({
      id: course.id,
      title: [course.title, [Validators.minLength(3), Validators.maxLength(30)]],
      duration: [course.duration, [Validators.min(1)]],
      durationUnit: [course.durationUnit, [Validators.minLength(3), Validators.maxLength(15)]],
      description: [course.description, [Validators.minLength(3), Validators.maxLength(30)]]
    })
  }

  save() {
    if (!this.form.valid) {
      return alert("Invalid form");
    }

    let newCourse = new Course(
      this.form.get('id').value,
      this.form.get('title').value,
      this.form.get('duration').value,
      this.form.get('durationUnit').value,
      this.form.get('description').value,
    )

    if (newCourse.id != 0) {
      let index = this.courseList.findIndex(obj => obj.id == newCourse.id);
      this.courseList[index] = newCourse;
      this.filteredList = this.courseList;
    }
    else {
      let newId: number = 1;
      if (this.courseList.length > 0) {
        newId = this.courseList[this.courseList.length - 1].id + 1;
      }
      newCourse.id = newId;
      this.courseList.push(newCourse);
      this.filteredList = this.courseList;
    }

    this.form = null;

  }

  filterList(searchValue: any) {
    if (searchValue.target.value.length > 0) {
      this.filteredList = this.courseList.filter(
        (item) => item.id.toString().toLowerCase().includes(searchValue.target.value.toLowerCase())
          || item.title.toLowerCase().includes(searchValue.target.value.toLowerCase())
          || item.duration.toString().toLowerCase().includes(searchValue.target.value.toLowerCase())
          || item.durationUnit.toLowerCase().includes(searchValue.target.value.toLowerCase())
          || item.description.toLowerCase().includes(searchValue.target.value.toLowerCase()),
      );
      return this.filteredList;
    }
    this.filteredList = this.courseList;
    return this.filteredList;
  }
}
