import { Component } from '@angular/core';

import { buttonsEntrance } from '../../shared/animations/animations';
import { AuthService } from '../../shared/services/auth.service';
// TODO: Update
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [buttonsEntrance]
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  loginWithGoogle(): void {
    this.auth.loginWithGoogle();
  }

  loginWithFacebook(): void {
    this.auth.loginWithFacebook();
  }

  loginWithGithub(): void {
    this.auth.loginWithGithub();
  }
}
