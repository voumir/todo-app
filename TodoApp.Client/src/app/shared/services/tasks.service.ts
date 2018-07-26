import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { AuthService } from './auth.service';

@Injectable()
export class TasksService {
  tasks$;

  constructor(private auth: AuthService) {
    // TODO: Implement Get tasks
  }

  getAll() {}

  create(task) {}

  remove(task) {}

  update(task, change: any) {}
}
