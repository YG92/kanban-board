import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule, MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {ListService} from './list/services/list.service';
import {ListComponent} from './list/list.component';
import {ListFormComponent} from './list/list-form/list-form.component';
import {FormComponent} from './form/form.component';
import {DragDropDirectiveModule} from 'angular4-drag-drop';
import {DragDropService} from './list/services/drag-drop.service';
//
// const firebaseConfig =

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListFormComponent,
    FormComponent
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
    DragDropDirectiveModule
  ],
  providers: [ListService, DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
