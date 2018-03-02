import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private af: AngularFireAuth,
              private authSrv: AuthService) {
  }

  isAuthenticated: boolean;

  logout() {
    this.authSrv.logOut();
  }

  ngOnInit() {
    this.af.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
      }
    });
  }
}
