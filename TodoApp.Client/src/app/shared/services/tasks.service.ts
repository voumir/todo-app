import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TasksService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(private auth: AuthService, private _http: HttpClient) {
    // TODO: Implement Get tasks
  }

  getAll() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.token}`
    });
    // No zaraz sie rozplacze XDDD nie chce juz w tym pisac
    return this._http.get(`${this.url}/api/assignments`, { headers });
  }

  create(task) {}

  remove(task) {}

  update(task, change: any) {}
}
