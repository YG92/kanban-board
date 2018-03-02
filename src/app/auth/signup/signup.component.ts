import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  constructor(private authSrv: AuthService) {
  }

  signUp(ev) {
    const email = ev.form.value.email;
    const password = ev.form.value.password;
    this.authSrv.signUp(email, password);
  }

  ngOnInit() {
  }
}
