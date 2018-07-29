import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { buttonsEntrance } from '../../shared/animations/animations';
import { UsersData } from '../../shared/models/UsersData';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  animations: [buttonsEntrance]
})
export class RegisterComponent implements OnDestroy {
  errorMessage = '';

  registerSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) { }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.registerSubscription && this.registerSubscription.unsubscribe();
  }

  register(userData: UsersData) {
    this.registerSubscription = this.userService.register(userData)
      .subscribe(
        _ => this.router.navigate(['/login']),
        err => this.errorMessage = Object.values(err.error.ModelState).join(' ')
      );
  }
}
