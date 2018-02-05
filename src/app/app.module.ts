import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {BoardFormComponent} from './board/board-form/board-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveErrors} from '@angular/forms/src/directives/reactive_errors';
import {BoardListService} from './board/board-list.service';
import {CardFormComponent} from './card/card-form/card-form.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, BoardFormComponent, CardFormComponent, BoardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [BoardListService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
