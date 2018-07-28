import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TasksService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(private auth: AuthService, private _http: HttpClient) { }

  getAll() {
    return this._http.get(`${this.url}/api/assignments`, { headers: this.getHeaders() });
  }

  create(content) {
    return this._http.post(
      `${this.url}/api/assignments`,
      { Content: content },
      { headers: this.getHeaders() }
    );
  }

  remove(task) {}

  update(task, change: any) {}

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.token}`
    });
  }
}
