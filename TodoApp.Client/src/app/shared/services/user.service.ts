import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterUserParams } from '../models/RegisterUserParams';

@Injectable()
export class UserService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(private _http: HttpClient) { }

  register(params: RegisterUserParams) {
    return this._http
      .post(`${this.url}/api/Account/Register`, params);
  }

}
