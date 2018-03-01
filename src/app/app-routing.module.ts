import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {NgModule} from '@angular/core';
import {BoardComponent} from './board/board.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'board', component: BoardComponent},
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
