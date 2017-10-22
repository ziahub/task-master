import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from './../task/model/task';
import { Status } from './../task/model/status';
import { TaskList } from './../tasklist/model/task-list';
import { TaskManagerService } from './task-manager.service';

@Component({
    selector: 'task-manager',
    templateUrl: './task-manager.component.html',
    styleUrls: [ './task-manager.component.css' ],
    providers: [TaskManagerService]
})

export class TaskManagerComponent implements OnInit {

  completed: Status = Status.completed;
  tasks: Array<Task> = new Array();
  allTasks: Array<Task> = new Array();

  activeLisView: Status = Status.active;

  constructor(private taskManagerService: TaskManagerService) {

  }

  ngOnInit() {
    this.loadTask();
  }

  private loadTask(): void {
    this.taskManagerService.getTasks().then(tasks => {
      tasks.forEach(task => {
        this.allTasks.push(task);
        if(task.status != Status.completed) {
            this.tasks.push(task);
        }
      });

      // console.log(this.tasks);
      // console.log(this.allTasks);
    });
  }

  onSubmit(form){}

  hideAlert():void {

  }

  addTask(newTaskTitle: String) {
    var newTask:Task = new Task(new Date().getTime(), newTaskTitle, Status.active);
    console.log(newTask);
    this.tasks.unshift(newTask);
    this.allTasks.unshift(newTask);
  }

  show(status: string): void {
    // console.log(status);
    if(Status[status] === Status.active) {
      this.activeLisView = Status.active;
      this.tasks = this.getTask(Status.active);
    } else if(Status[status] === Status.completed) {
      this.activeLisView = Status.completed;
      this.tasks = this.getTask(Status.completed);
    } else {
      this.activeLisView = null;
      this.tasks = this.getNonDeletedTask();
    }
  }

  private getTask(status: Status): Array<Task> {
    var tasks: Array<Task> = new Array();
    this.allTasks.forEach(task => {
      if(task.status === status &&  task.status != Status.deleted) {
          tasks.push(task);
      }
    });
    // console.log(tasks)
    return tasks;
  }

  private getNonDeletedTask(): Array<Task> {
    var tasks: Array<Task> = new Array();
    this.allTasks.forEach(task => {
      if(task.status != Status.deleted) {
          tasks.push(task);
      }
    });
    return tasks;
  }

  processTaskEvent(task: Task) {
      // console.log("Inside processTaskEvent");

      if(task.status === Status.deleted) {
        console.log(task);
        this.deleteTask(task);
      }

      this.refreshList();
  }

  private refreshList(): void {
    if(this.activeLisView === Status.active || this.activeLisView === Status.completed) {
      this.tasks = this.getTask(this.activeLisView);
    } else {
      this.tasks = this.getNonDeletedTask();
    }

  }
  private deleteTask(deletedTask: Task) {
    var index:number = this.allTasks.indexOf(deletedTask);
    this.allTasks.splice(index,1);
    // console.log(this.allTasks);
  }
}
