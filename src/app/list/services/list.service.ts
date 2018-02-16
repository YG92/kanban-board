import {ListModel} from '../list.model';
import {Subject} from 'rxjs/Subject';

export class ListService {

  private listStore: ListModel[] = [
    new ListModel('title1', ['gdgd', 'dfsdfsa']),
    new ListModel('title2', ['gdgd', 'dfsdfsa']),
    new ListModel('title3', ['gdgd', 'dfsdfsa']),
    new ListModel('title4', ['gdgd', 'dfsdfsa'])
  ];
  listChanged = new Subject<ListModel[]>();

  getListStore() {
    return this.listStore.slice();
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
