import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private af: AngularFireAuth) {
  }

  token: string;

  signUp(email: string, password: string) {
    this.af.auth.createUserWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateAuthorizedUser()
      ).catch((err) =>
      console.log(err));
  }

  signIn(email: string, password: string) {
    this.af.auth.signInWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateAuthorizedUser()
      )
      .catch((err) =>
        console.log(err));
  }

  logOut() {
    this.af.auth.signOut()
      .catch((err) =>
        console.log(err));
  }

  navigateAuthorizedUser() {
    this.router.navigate(['/board']);
  }

  getToken() {
    this.af.authState.subscribe(authState => {
      if (authState) {
        authState.getIdToken().then(token => {
          this.token = token;
        });
      }
    });
    return this.token;
  }

}
