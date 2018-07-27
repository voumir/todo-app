import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginData } from '../models/LoginData';

@Injectable()
export class AuthService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';
  token: string;
  userName: string;

  constructor(private route: ActivatedRoute, private _http: HttpClient) {}

  getURL(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  login(data: LoginData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', data.username);
    urlSearchParams.set('password', data.password);

    const body = urlSearchParams.toString();

    return this._http.post(`${this.url}/Token`, body, { headers })
      .map(res => {
        this.token = res['access_token'];
        this.userName = res['userName'];
      });
  }
  // TODO: Logout
}
