import {Injectable} from '@angular/core';
import {ListModel} from '../list/list.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ListService {
  constructor() {
  }

  list: ListModel[] = [
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa']),
    new ListModel('title', ['gdgd', 'dfsdfsa'])
  ];
  listAdded = new Subject<ListModel[]>();
  editedList: ListModel;

  getList() {
    return this.list.slice();
  }

  newList(title) {
    this.list.push(new ListModel(title, []));
    this.listAdded.next(this.list.slice());
  }

  newCard(title) {
    this.editedList.cards.push(title);
    this.listAdded.next(this.list.slice());
  }
}
