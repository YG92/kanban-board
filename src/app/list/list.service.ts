import {Injectable} from '@angular/core';
import {ListModel} from '../list/list.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ListService {
  constructor() {
  }

  listStore: ListModel[] = [
    new ListModel('title1', ['gdgd', 'dfsdfsa']),
    new ListModel('title2', ['gdgd', 'dfsdfsa']),
    new ListModel('title3', ['gdgd', 'dfsdfsa']),
    new ListModel('title4', ['gdgd', 'dfsdfsa'])
  ];
  listAdded = new Subject<ListModel[]>();
  editedList: ListModel;
  draggedItem: string;
  draggedListId: number;
  draggedCardId: number;

  getListStore() {
    return this.listStore.slice();
  }

  addNewList(list) {
    this.listStore.push(new ListModel(list, []));
    this.listAdded.next(this.listStore.slice());
  }

  addNewCard(card) {
    this.editedList.cards.push(card);
    this.listAdded.next(this.listStore.slice());
  }

  deleteCard() {
    this.listStore[this.draggedListId].cards.splice(this.draggedCardId, 1);
  }
}
