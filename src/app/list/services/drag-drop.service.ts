import {
  Injectable,
  OnDestroy
} from '@angular/core';
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

  draggedListId: number;
  draggedCardId: number;
  draggedItem: string;

  dropCard(editedListId) {
    const editedList = this.listStore[editedListId];
    editedList.cards.push(this.draggedItem);
  }

  deleteCard() {
    const cleanedList = this.listStore[this.draggedListId];
    cleanedList.cards.splice(this.draggedCardId, 1);
    this.listSrv.listChanged.next(this.listStore.slice());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
