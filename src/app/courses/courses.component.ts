import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  currentCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.courses;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.currentCourse = emptyCourse;
  }
  selectCourse(course) {
    this.currentCourse = course;
  }
  saveCourse() {}
  deleteCourse(courseId) {
    this.courses = this.courses.filter((item) => item.id != courseId);
  }
  cancel() {
    this.resetSelectedCourse();
  }
}
