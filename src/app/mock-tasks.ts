import { Task } from './task/model/task';
import { Status } from './task/model/status';

export const TASKS: Task[] = [
  { id: 10, title: 'Task 1', status: Status.active},
  { id: 11, title: 'Task 2', status: Status.active},
  { id: 12, title: 'Task 3', status: Status.completed},
  { id: 13, title: 'Task 4', status: Status.completed},
  { id: 14, title: 'Task 5', status: Status.completed},
  { id: 15, title: 'Task 6', status: Status.active}
];
