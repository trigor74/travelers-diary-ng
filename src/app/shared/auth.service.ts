import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  get authenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }

  get uid(): string {
    return this.authenticated ? firebase.auth().currentUser.uid : '';
  }

  get userInfo(): firebase.UserInfo {
    if (this.authenticated) {
      return firebase.auth().currentUser.providerData[0];
    } else {
      return null;
    }
  }

  login() {
    this.afAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(err => console.log('ERROR @ AuthService#login() :', err.message));
  }

  logout() {
    this.afAuth
      .auth
      .signOut()
      .catch(err => console.log('ERROR @ AuthService#logout() :', err.message));
  }

}
