import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }

  loginWithGithub() {
    this.auth.loginWithGithub();
  }
}
