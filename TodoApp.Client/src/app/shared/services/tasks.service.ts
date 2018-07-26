import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Task } from '../models/task';
import { AuthService } from './auth.service';

@Injectable()
export class TasksService {
  tasks$;

  constructor(private auth: AuthService) {
    // TODO: Implement Get tasks
  }

  create(task: Task) {}

  remove(task: Task) {}

  update(task: Task, change: any) {}
}
