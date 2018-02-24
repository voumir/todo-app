import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

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

  getURL() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  loginWithGoogle() {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithGithub() {
    this.getURL();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
