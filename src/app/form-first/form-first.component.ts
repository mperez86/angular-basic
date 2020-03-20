import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Form not submitted"
  defaultName = ""
  user = ""
  displayPassword = false
  lightStatus = "RED"
  names = ['Manuel', 'Ana', 'José', 'María', 'Juan']
  courses = []
  errorMessage = ""

  @Input() parentDataToChild
  //@Input('parentDataToChild') messageFromParent

  @Output() childEvent = new EventEmitter()
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    //this.courses = this.courseService.getCourses()
    this.courseService.getCourses().subscribe(data=>this.courses=data,
                                              error => this.errorMessage = error)
  }

  onSendForm(email) {
    console.log(this.courses)
    console.log(email)
    this.status = 'Form has been send';
  }

  onDefaultForm() {
    this.defaultName = "Manuel"
  }

  onSendEvent() {
    this.childEvent.emit('Enviando envento desde hijo hasta padre')
  }
}
