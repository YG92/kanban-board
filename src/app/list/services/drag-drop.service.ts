import {Injectable, OnDestroy} from '@angular/core';
import {ListService} from './list.service';
import {ListModel} from '../list.model';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class DragDropService implements OnDestroy {

  constructor(private listSrv: ListService) {
    this.listStore = this.listSrv.getListStore();
    this.subscription = this.listSrv.listChanged
      .subscribe(listStore => {
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
    this.listSrv.listChanged.next(this.listStore.slice());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
