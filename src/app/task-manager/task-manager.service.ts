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
  // getTasks(): Promise<Task[]> {
      // return this.http.get(this.taskUrl)
      //        .toPromise()
      //        .then(response => {
      //          console.log(response.json());
      //          console.log(response.json().data);
      //          console.log(<Task[]>response.json());
      //          <Task[]>response.json()})
      //        .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error); // for demo purposes only
  //     return Promise.reject(error.message || error);
  // }
}
