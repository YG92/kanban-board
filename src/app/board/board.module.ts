import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DragDropDirectiveModule} from 'angular4-drag-drop';
import {ClickOutsideDirective} from '../click-outside.directive';
import {MaterialModule} from '../material/material.module';
import {ToggleIconsDirective} from '../toggle-icons.directive';
import {BoardComponent} from './board.component';
import {FormComponent} from './form/form.component';
import {CardComponent} from './list/card/card.component';
import {ListFormComponent} from './list/list-form/list-form.component';
import {ListComponent} from './list/list.component';
import {DragDropService} from './list/services/drag-drop.service';

@NgModule({
  declarations: [
    ListComponent,
    ListFormComponent,
    FormComponent,
    CardComponent,
    BoardComponent,
    ToggleIconsDirective,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropDirectiveModule,

  ],
  providers: [
    DragDropService,
    ClickOutsideDirective
  ]
})
export class BoardModule {
}
