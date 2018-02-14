import {Injectable} from '@angular/core';
import {ListService} from './list.service';

@Injectable()
export class DragDropService {

  constructor(private listSrv: ListService) {
  }

  listStore = this.listSrv.getListStore();

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
  }
}
