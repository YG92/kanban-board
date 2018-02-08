import {Injectable} from '@angular/core';
import {ListModel} from '../list/list.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ListService {
  constructor() {
  }

  listStore: ListModel[] = [
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa'])
  ];
  listAdded = new Subject<ListModel[]>();
  editedList: ListModel;

  getListStore() {
    return this.listStore.slice();
  }

  addNewList(title) {
    this.listStore.push(new ListModel(title, []));
    this.listAdded.next(this.listStore.slice());
  }

  addNewCard(title) {
    this.editedList.cards.push(title);
    this.listAdded.next(this.listStore.slice());
  }
}
