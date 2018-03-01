import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../../../auth/auth.service';
import {ListService} from './list.service';
import {ListModel} from '../list.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private listSrv: ListService,
              private af: AngularFireAuth,
              private authSrv: AuthService) {
    this.getLists();
  }

  userId: string;
  token: string;

  storeLists() {
    return this.http
      .put(
        `https://kanban-board-51264.firebaseio.com/${this.userId}/lists.json?auth=${this.token}`,
        this.listSrv.getListStore()
      )
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  getLists() {
    this.authSrv.getUserIdAndToken.subscribe(data => {
      this.userId = data.userId;
      this.token = data.token;
      this.http
        .get(
          `https://kanban-board-51264.firebaseio.com/${this.userId}/lists.json?auth=${this.token}`)
        // 'https://kanban-board-51264.firebaseio.com/lists.json')
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
    });
  }
}
