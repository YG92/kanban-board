import {Component, Input, OnInit} from '@angular/core';
import {ToggleIconsDirective} from '../../toggle-icons.directive';
import {ListModel} from './list.model';
import {ListService} from './services/list.service';
import {DragDropService} from './services/drag-drop.service';
import {EditService} from './services/edit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [ToggleIconsDirective]
})
export class ListComponent implements OnInit {
  constructor(private listSrv: ListService,
              private dragDrop: DragDropService,
              private editSrv: EditService) {
  }

  @Input() list: ListModel;
  @Input() listId: number;
  iconsToggled = false;
  editMode = false;

  addDropItem() {
    this.dragDrop.dropCard(this.listId);
    this.dragDrop.deleteCard();
  }

  addCard(title: string) {
    this.editSrv.addNewCard(this.list, title);
  }

  editList(listTitle) {
    this.editSrv.editList(this.listId, listTitle);
    this.switchMode();
  }

  deleteList() {
    this.editSrv.deleteList(this.listId);
  }

  switchMode() {
    this.editMode = !this.editMode;
  }

  toggleIcons(val) {
    this.iconsToggled = val;
  }

  ngOnInit() {
  }
}
