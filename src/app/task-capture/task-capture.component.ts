import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task'
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-task-capture',
  template: `
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
      <label for="taskName">Enter task name: </label>
      <md-input id="taskName" name="taskName" ngModel style="width:30%"></md-input>
      <button md-raised-button type="submit" color="primary">Start</button>
    </form>
    
    <div *ngFor="let task of afTimesheetList | async">
      {{task | json}}
    </div>

  `,
  styles: []
})
export class TaskCaptureComponent implements OnInit {
  afTimesheetList: FirebaseListObservable<any[]>

  constructor(af: AngularFire) {
    this.afTimesheetList = af.database.list('/tasks');
  }

  ngOnInit() {
  }

  onSubmit(value) {
    let task: Task = {
      name: value.taskName,
      billable: true,
      start: new Date(),
      end: null
    };

    // Where do we send this to Firebase?
    this.afTimesheetList.push(task)
  }

}
