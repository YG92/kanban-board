import {Injectable} from '@angular/core';
import {listChanges} from 'angularfire2/database';
import {ListService} from './list.service';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class EditService {
  constructor(private listSrv: ListService,
              private dataSrv: DataStorageService) {
  }

  listChanged() {
    this.listSrv.listChanged.next(this.listSrv.getListStore());
    this.dataSrv.storeLists();
  }

  addNewCard(list, cardTitle) {
    list.cards.push(cardTitle);
    this.listChanged();
  }

  deleteCard(listId, cardId) {
    const list = this.listSrv.listStore[listId];
    list.cards.splice(cardId, 1);
    this.listChanged();
  }

  addNewList(newList) {
    this.listSrv.listStore.push(newList);
    this.listChanged();
  }

  deleteList(listId) {
    this.listSrv.listStore.splice(listId, 1);
    this.listChanged();
  }
}
