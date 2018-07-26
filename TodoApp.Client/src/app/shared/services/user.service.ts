import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RegisterUserParams } from '../models/RegisterUserParams';

@Injectable()
export class UserService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(private _http: Http) { }

  register(params: RegisterUserParams) {
    return this._http
      .post(`${this.url}/api/Account/Register`, params);
  }

}
