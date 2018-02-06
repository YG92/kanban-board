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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListService} from './list/list.service';
import {CardFormComponent} from './card/card-form/card-form.component';
import {ListComponent} from './list/list.component';
import {ListFormComponent} from './list/list-form/list-form.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent, ListComponent, ListFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [ListService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
