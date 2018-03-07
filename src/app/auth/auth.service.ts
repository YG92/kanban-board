import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {ListService} from '../board/list/services/list.service';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private af: AngularFireAuth,
              private listSrv: ListService) {
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
    this.af.auth.signOut().then(() => {
      this.listSrv.setListStore([]);
      this.router.navigate(['/login']);
    });
  }

  navigateUser() {
    return this.router.navigate(['/board']);
  }
}

