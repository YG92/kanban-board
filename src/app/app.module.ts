import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {ListService} from './board/list/services/list.service';
import {ListComponent} from './board/list/list.component';
import {ListFormComponent} from './board/list/list-form/list-form.component';
import {FormComponent} from './board/form/form.component';
import {DragDropDirectiveModule} from 'angular4-drag-drop';
import {DragDropService} from './board/list/services/drag-drop.service';
import {AngularFireModule} from 'angularfire2';

import {HttpModule} from '@angular/http';
import {DataStorageService} from './board/list/services/data-storage.service';
import {CreateService} from './board/list/services/create';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import {BoardComponent} from './board/board.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthFormComponent} from './auth/auth-form/auth-form.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDh8GJ2VfGDz8on6ppnTWV-oWiv2B1lcJc',
  authDomain: 'kanban-board-51264.firebaseapp.com',
  databaseURL: 'https://kanban-board-51264.firebaseio.com',
  projectId: 'kanban-board-51264',
  storageBucket: '',
  messagingSenderId: '482929705086'
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListFormComponent,
    FormComponent,
    SignupComponent,
    SigninComponent,
    BoardComponent,
    PageNotFoundComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropDirectiveModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [
    ListService,
    DragDropService,
    DataStorageService,
    CreateService,
    AuthService,
    AngularFireModule,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
