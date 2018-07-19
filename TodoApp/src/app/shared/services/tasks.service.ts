import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Task } from '../models/task';
import { AuthService } from './auth.service';

@Injectable()
export class TasksService {

  tasks$: FirebaseListObservable<Task[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    auth.uid$
      .take(1)
      .subscribe(uid => {
        const path = `/tasks/${uid}`;

        this.tasks$ = db.list(path);
      });
  }

  create(task: Task) {
    return this.tasks$.push(task);
  }

  remove(task: Task) {
    return this.tasks$.remove(task.$key);
  }

  update(task: Task, change: any) {
    return this.tasks$.update(task.$key, change);
  }
}
