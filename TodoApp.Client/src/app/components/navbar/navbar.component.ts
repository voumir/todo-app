import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared/services/auth.service';
import { CookieService } from '../../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  current: string;
  subscription: Subscription;

  constructor(
    public auth: AuthService,
    private router: Router,
    private cookie: CookieService) { }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      // tslint:disable-next-line:curly
      if (event instanceof NavigationEnd)
        this.current = event.url;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUsername() {
    return this.cookie.get('userName');
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
