import { Course } from './models/Course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private resource = 'http://localhost:4243';

  constructor(
    private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    const url = `${this.resource}/courses`;
    return this.http.get<Course[]>(url);
  }

}
