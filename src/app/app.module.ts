import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCardModule} from '@angular/material';
import {BoardFormComponent} from './board/board-form/board-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveErrors} from '@angular/forms/src/directives/reactive_errors';

@NgModule({
  declarations: [AppComponent, BoardComponent, BoardFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
