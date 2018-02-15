import {ListModel} from '../list.model';
import {Subject} from 'rxjs/Subject';

export class ListService {

  listStore: ListModel[] = [
    new ListModel('title1', ['gdgd', 'dfsdfsa']),
    new ListModel('title2', ['gdgd', 'dfsdfsa']),
    new ListModel('title3', ['gdgd', 'dfsdfsa']),
    new ListModel('title4', ['gdgd', 'dfsdfsa'])
  ];
  listChanged = new Subject<ListModel[]>();
  editedListId: number;

  getListStore() {
    return this.listStore.slice();
  }

  addNewList(list) {
    this.listStore.push(new ListModel(list, []));
    this.listChanged.next(this.listStore.slice());
  }

  addNewCard(card) {
    const editedList = this.listStore[this.editedListId];
    editedList.cards.push(card);
    this.listChanged.next(this.listStore.slice());
  }

}
