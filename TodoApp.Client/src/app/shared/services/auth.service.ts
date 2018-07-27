import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenResponse } from '../models/TokenResponse';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { LoginData } from '../models/LoginData';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AuthService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';
  token: string;

  constructor(private route: ActivatedRoute, private _http: HttpClient) {}

  getURL(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  login(data: LoginData) {
    const httpBody = {
      grant_type: 'password',
      username: data.username,
      password: data.password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this._http.post(`${this.url}/Token`, httpBody, httpOptions)
      .subscribe(res => console.log(res));
  }
  // TODO: Login

  // TODO: Logout
}
