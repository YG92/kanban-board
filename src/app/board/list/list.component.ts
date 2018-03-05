import {Component, Input, OnInit} from '@angular/core';
import {EditModeDirective} from '../../edit-mode.directive';
import {ListModel} from './list.model';
import {ListService} from './services/list.service';
import {DragDropService} from './services/drag-drop.service';
import {EditService} from './services/edit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [EditModeDirective]
})
export class ListComponent implements OnInit {
  constructor(private listSrv: ListService,
              private dragDrop: DragDropService,
              private editSrv: EditService) {
  }

  @Input() list: ListModel;
  @Input() listId: number;
  editModeEnabled = false;

  addDropItem() {
    this.dragDrop.dropCard(this.listId);
    this.dragDrop.deleteCard();
  }

  addCard(title: string) {
    this.editSrv.addNewCard(this.list, title);
  }

  deleteList() {
    this.editSrv.deleteList(this.listId);
  }

  switchMode(enabled) {
    this.editModeEnabled = enabled;
  }

  ngOnInit() {
  }
}
