import { Component, OnDestroy } from '@angular/core';

import { buttonsEntrance } from '../../shared/animations/animations';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [buttonsEntrance]
})
export class LoginComponent implements OnDestroy {
  loginSubscription: Subscription;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnDestroy() {
    // tslint:disable-next-line:curly
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }

  login() {
    this.auth.login({ username: 'mazxaxz@gmail.com', password: 'Qwerty123+' })
      .subscribe(_ => this.router.navigateByUrl(localStorage.getItem('returnUrl')));
  }
}
