import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  constructor(private authSrv: AuthService) {}

  signIn(ev) {
    const email = ev.form.value.email;
    const password = ev.form.value.password;
    this.authSrv.signIn(email, password);
  }


  ngOnInit() {}
}
