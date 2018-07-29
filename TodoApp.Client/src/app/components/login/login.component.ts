import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { buttonsEntrance } from '../../shared/animations/animations';
import { AuthService } from '../../shared/services/auth.service';
import { UsersData } from '../../shared/models/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [buttonsEntrance]
})
export class LoginComponent implements OnDestroy {
  errorMessage = '';

  loginSubscription: Subscription;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }

  login(userData: UsersData) {
    this.loginSubscription = this.auth
      .login(userData)
      .subscribe(
        _ => this.router.navigateByUrl(localStorage.getItem('returnUrl')),
        err => this.errorMessage = err.error.error_description
      );
  }
}
