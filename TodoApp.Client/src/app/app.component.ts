import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
// TODO: Update redirect method
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router) {
      auth.user$.subscribe(user => {
        // tslint:disable-next-line:curly
        if (!user) return;

        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        // tslint:disable-next-line:curly
        if (!returnUrl) return;

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      });
  }
}
