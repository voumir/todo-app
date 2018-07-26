import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared/services/auth.service';
// TODO: Update
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  current: string;
  subscription: Subscription;

  constructor(public auth: AuthService, private router: Router) { }

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

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
