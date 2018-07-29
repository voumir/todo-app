import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UsersData } from '../models/UsersData';

@Injectable()
export class AuthService {
  url = 'https://todoappwebapi20180726022310.azurewebsites.net';

  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient,
    private cookie: CookieService) {}

  getURL(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  login(data: UsersData) {
    this.getURL();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', data.username);
    urlSearchParams.set('password', data.password);

    const body = urlSearchParams.toString();

    return this._http.post(`${this.url}/Token`, body, { headers })
      .map(res => {
        this.cookie.set('token', res['access_token']);
        this.cookie.set('userName', res['userName']);
      });
  }

  logout() {
    this.cookie.check('token') ? this.cookie.deleteAll() : console.error('Token does not exist');
  }
}
