import {Injectable} from '@angular/core';
import {ListService} from './list.service';
import {ListModel} from '../list.model';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class DragDropService {
  constructor(private listSrv: ListService,
              private dataSrv: DataStorageService) {
  }

  draggedListId: number;
  draggedCardId: number;
  draggedItem: string;

  dropCard(listId) {
    const list = this.listSrv.listStore[listId];
    list.cards.push(this.draggedItem);
  }

  deleteCard() {
    const draggedList = this.listSrv.listStore[this.draggedListId];
    draggedList.cards.splice(this.draggedCardId, 1);
    this.dataSrv.storeLists();
  }
}
