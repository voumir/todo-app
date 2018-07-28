import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';

import { CookieService } from '../../../../node_modules/ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookie: CookieService) { }

  canActivate(route, state: RouterStateSnapshot) {
    // tslint:disable-next-line:curly
    if (this.cookie.get('token'))
      return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
