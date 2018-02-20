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
import {AngularFireModule} from 'angularfire2';
import {Http, HttpModule} from '@angular/http';
import {DataStorageService} from './list/services/data-storage.service';
import {CreateService} from './list/services/create.service';

const firebaseConfig = {
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
    DragDropDirectiveModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ListService,
    DragDropService,
    DataStorageService,
    CreateService,
    AngularFireModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
