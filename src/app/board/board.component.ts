import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListModel } from './list/list.model';
import { ListService } from './list/services/list.service';
import { DataStorageService } from './list/services/data-storage.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit, OnDestroy {
  constructor(
    private listSrv: ListService,
  ) {}

  listStore: ListModel[];
  subscription: Subscription;

  ngOnInit() {
    this.listStore = this.listSrv.getListStore();
    this.subscription = this.listSrv.listChanged.subscribe(listStore => {
      this.listStore = listStore;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
