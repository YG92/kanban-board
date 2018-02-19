import {Injectable, OnDestroy} from '@angular/core';
import {ListService} from './list.service';
import {ListModel} from '../list.model';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class DragDropService implements OnDestroy {
  constructor(private listSrv: ListService, private dataSrv: DataStorageService) {
    this.listStore = this.listSrv.getListStore();
    this.subscription = this.listSrv.listChanged.subscribe(
      listStore => {
        this.listStore = listStore;
      });
  }

  listStore: ListModel[];
  subscription: Subscription;

  draggedList: ListModel;
  draggedCardId: number;
  draggedItem: string;

  dropCard(list) {
    list.cards.push(this.draggedItem);
  }

  deleteCard() {
    this.draggedList.cards.splice(this.draggedCardId, 1);
    this.listSrv.setListStore(this.listStore);
    this.dataSrv.storeLists();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
