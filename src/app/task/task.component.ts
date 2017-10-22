import { Component, NgModule, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from './../task/model/task';
import { Status } from './model/status';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: [ './task.component.css' ]
})

export class TaskComponent implements OnInit {

  @Input() task: Task;

  editable:boolean = false;

  constructor() {}

  ngOnInit() {}

  deleteTask(deletedTask: Task) {
    this.task.status = Status.deleted;
  }

  markAsCompleted() {
    this.task.status = Status.completed;
  }

  markAsIncomplete(inCompletedTask: Task) {
    this.task.status = Status.active;
  }
}
