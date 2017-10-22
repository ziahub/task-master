import { Task } from '../../task/model/task';

export class TaskList {

  constructor(public id: String, public taskGroup: String, public taskList: Array<Task>,
    public loading: boolean, public loaded: boolean) {}
}
