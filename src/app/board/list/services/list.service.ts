import { ListModel } from '../list.model';
import { Subject } from 'rxjs/Subject';

export class ListService {
  constructor() {}

  listStore: ListModel[] = [];
  listChanged = new Subject<ListModel[]>();

  getListStore() {
    return this.listStore.slice();
  }

  setListStore(lists: ListModel[]) {
    this.listStore = lists;
    this.listChanged.next(this.getListStore());
  }
}
