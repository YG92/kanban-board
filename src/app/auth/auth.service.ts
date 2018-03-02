import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private af: AngularFireAuth) {
  }

  signUp(email: string, password: string) {
    this.af.auth.createUserWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateUser()
      )
      .catch((err) =>
        console.log(err));
  }

  signIn(email: string, password: string) {
    this.af.auth.signInWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateUser()
      )
      .catch((err) =>
        console.log(err));
  }

  logOut() {
    this.af.auth.signOut();
    this.router.navigate(['/login']);
  }

  navigateUser() {
    return this.router.navigate(['/board']);
  }
}

