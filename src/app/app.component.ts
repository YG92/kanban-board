import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import {ListService} from './list/services/list.service';
import {Subscription} from 'rxjs/Subscription';
import {ListModel} from './list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private listSrv: ListService) {
  }

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
