import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UsersData } from '../models/UsersData';

@Injectable()
export class UserService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(private _http: HttpClient) { }

  register(params: UsersData) {
    return this._http
      .post(`${this.url}/api/Account/Register`, params);
  }
}
