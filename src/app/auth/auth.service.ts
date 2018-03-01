import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private af: AngularFireAuth) {
  }

  getUserIdAndToken = Observable.create((observer: Observer<object>) => {
    this.af.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        user.getIdToken().then(token => {
          observer.next({userId, token});
        });
      }
    });
  });

  signUp(email: string, password: string) {
    this.af.auth.createUserWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateUser(true)
      ).catch((err) =>
      console.log(err));
  }

  signIn(email: string, password: string) {
    this.af.auth.signInWithEmailAndPassword(email,
      password)
      .then(() =>
        this.navigateUser(true)
      )
      .catch((err) =>
        console.log(err));
  }

  logOut() {
    this.af.auth.signOut()
      .catch((err) =>
        console.log(err));
  }

  navigateUser(user) {
    if (user) {
      this.router.navigate(['/board']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

