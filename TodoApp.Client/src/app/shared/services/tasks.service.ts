import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TasksService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(
    private _http: HttpClient,
    private cookie: CookieService) { }

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

  update(taskId: number, change: any) {
    return this._http.put(
      `${this.url}/api/assignments/${taskId}`,
      change,
      { headers: this.getHeaders() }
    );
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.cookie.get('token')}`
    });
  }
}
