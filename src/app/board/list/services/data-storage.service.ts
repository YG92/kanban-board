import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ListService } from './list.service';
import { ListModel } from '../list.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private listSrv: ListService) {
    this.getLists();
  }

  storeLists() {
    return this.http
      .put(
        'https://kanban-board-51264.firebaseio.com/lists.json',
        this.listSrv.getListStore()
      )
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  getLists() {
    this.http
      .get('https://kanban-board-51264.firebaseio.com/lists.json')
      .map((response: Response) => {
        const lists: ListModel[] = response.json();
        lists.map(list => {
          if (!list['cards']) {
            list['cards'] = [];
          }
        });
        return lists;
      })
      .subscribe((lists: ListModel[]) => {
        this.listSrv.setListStore(lists);
      });
  }
}
