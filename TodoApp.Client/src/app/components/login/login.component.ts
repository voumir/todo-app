import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { buttonsEntrance } from '../../shared/animations/animations';
import { UsersData } from '../../shared/models/UsersData';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [buttonsEntrance]
})
export class LoginComponent implements OnDestroy {
  errorMessage = '';
  requestPending = false;

  loginSubscription: Subscription;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }

  login(userData: UsersData) {
    this.requestPending = true;

    this.loginSubscription = this.auth
      .login(userData)
      .subscribe(
        _ => {
          this.router.navigateByUrl(localStorage.getItem('returnUrl'));
          this.requestPending = false;
        },
        err => {
          this.errorMessage = err.error.error_description;
          this.requestPending = false;
        }
      );
  }
}
