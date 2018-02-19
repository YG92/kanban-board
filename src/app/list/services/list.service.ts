import {ListModel} from '../list.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class ListService {
  constructor() {
  }

  private listStore: ListModel[] = [];
  listChanged = new Subject<ListModel[]>();

  getListStore() {
    return this.listStore.slice();
  }

  setListStore(lists: ListModel[]) {
    this.listStore = lists;
    this.listChanged.next(this.listStore.slice());
  }

  addNewList(newList) {
    this.listStore.push(newList);
    this.listChanged.next(this.listStore.slice());
  }

  addNewCard(list, cardTitle) {
    list.cards.push(cardTitle);
    this.listChanged.next(this.listStore.slice());
  }
}
