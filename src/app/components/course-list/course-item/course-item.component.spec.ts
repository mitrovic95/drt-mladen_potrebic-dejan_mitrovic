import { async, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent]
    });
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(CourseItemComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
