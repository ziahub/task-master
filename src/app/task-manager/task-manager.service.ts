import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Task } from './../task/model/task';
import { TASKS } from './../mock-tasks';

@Injectable()
export class TaskManagerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taskUrl = 'api/tasks';  // URL to web api

  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
}
