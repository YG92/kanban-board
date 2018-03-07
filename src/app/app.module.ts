import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';

import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {BoardModule} from './board/board.module';
import {CoreModule} from './core/page-not-found/core.module';
import {MaterialModule} from './material/material.module';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    BoardModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
