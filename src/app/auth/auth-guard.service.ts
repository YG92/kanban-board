import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, RouterStateSnapshot
} from '@angular/router';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authSrv: AuthService,
              private router: Router,
              private af: AngularFireAuth) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.af.authState.map(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    });
  }
}
