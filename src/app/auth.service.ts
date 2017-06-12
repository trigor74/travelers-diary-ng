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

  login() {
    this.afAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      // .then(value => {
      //   console.log('Logged in ', value);
      //   console.log('UID: ', value.user.uid);
      //   console.log(value.additionalUserInfo.profile);
      //   // {
      //   //   gender: "male",
      //   //   name: "Ігор Тріфонов",
      //   //   link: "https://plus.google.com/11677914491…",
      //   //   id: "116779144919467620443",
      //   //   verified_email: true,
      //   //   given_name: "Ігор",
      //   //   locale: "uk",
      //   //   family_name: "Тріфонов",
      //   //   email: "trigor74@gmail.com",
      //   //   picture: "https://lh4.googleusercontent.com/-…"
      //   // }
      // })
      .catch(err => {
        alert('ERROR: ' + err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut()
      .catch(err => {
          alert('ERROR: ' + err.message);
      });
  }

  get userInfo(): firebase.UserInfo {
    if (this.user) {
      return this.afAuth.auth.currentUser.providerData[0];
    } else {
      return null;
    }
  }

  get uid(): string {
    if (this.user) {
      return this.afAuth.auth.currentUser.uid
    } else {
      return null;
    }
  }

}
