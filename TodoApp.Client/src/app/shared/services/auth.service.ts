import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private route: ActivatedRoute) {
    // TODO: Get token
  }

  getURL(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  // TODO: Login

  // TODO: Logout
}
