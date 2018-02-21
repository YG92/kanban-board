import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import { ListModel } from '../list.model';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class DragDropService {
  constructor(
    private listSrv: ListService,
    private dataSrv: DataStorageService
  ) {}

  draggedList: ListModel;
  draggedCardId: number;
  draggedItem: string;

  dropCard(list) {
    list.cards.push(this.draggedItem);
  }

  deleteCard() {
    this.draggedList.cards.splice(this.draggedCardId, 1);
    this.dataSrv.storeLists();
  }
}
