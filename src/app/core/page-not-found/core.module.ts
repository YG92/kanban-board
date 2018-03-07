import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DragDropDirectiveModule} from 'angular4-drag-drop';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthGuardService} from '../../auth/auth-guard.service';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../board/list/services/data-storage.service';
import {EditService} from '../../board/list/services/edit.service';
import {ListService} from '../../board/list/services/list.service';
import {MaterialModule} from '../../material/material.module';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    ListService,
    DataStorageService,
    EditService,
    AuthService,
    AngularFireModule,
    AngularFireAuth,
    AngularFireDatabase,
    AuthGuardService
  ]
})
export class CoreModule {
}
