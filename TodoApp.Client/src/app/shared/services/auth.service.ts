import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
// TODO: Firebase out / Custom backend in
// TODO: Implement Registration
@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  uid$: Observable<string>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
      this.user$ = afAuth.authState;
      this.uid$ = afAuth.authState.map(user => user.uid);
  }

  getURL(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  loginWithGoogle(): void {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook(): void {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithGithub(): void {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
