import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryTaskDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      { id: 1, name: 'Task 1', status:'all', completionDate:'2017-10-06T18:25:43.511Z' },
      { id: 2, name: 'Task 2', status:'all', completionDate:'2017-10-06T18:25:43.511Z' },
      { id: 3, name: 'Task 3', status:'all', completionDate:'2017-10-06T18:25:43.511Z' },
      { id: 4, name: 'Task 4', status:'all', completionDate:'2017-10-06T18:25:43.511Z' },
      { id: 5, name: 'Task 5', status:'all', completionDate:'2017-10-06T18:25:43.511Z' }
    ]
    return {tasks};
  }
}
