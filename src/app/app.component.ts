import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private authSrv: AuthService,
              private af: AngularFireAuth) {
  }

  userExists: Boolean;

  logout() {
    this.authSrv.logOut();
  }

  ngOnInit() {
    this.af.authState.subscribe(user => {
      if (user) {
        this.userExists = true;
      }
      this.authSrv.navigateUser(user);
    });
  }

}
