import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class CreateService {
  constructor(
    private listSrv: ListService,
    private dataSrv: DataStorageService
  ) {}

  addNewList(newList) {
    this.listSrv.listStore.push(newList);
    this.listSrv.listChanged.next(this.listSrv.getListStore());
    this.dataSrv.storeLists();
  }

  addNewCard(list, cardTitle) {
    list.cards.push(cardTitle);
    this.dataSrv.storeLists();
  }
}
