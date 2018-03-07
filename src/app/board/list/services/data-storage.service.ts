import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {ListService} from './list.service';
import {ListModel} from '../list.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private listSrv: ListService,
              private af: AngularFireAuth,
              private db: AngularFireDatabase) {

    this.af.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        user.getIdToken().then(token => {
          this.token = token;
          this.checkDataExists(this.userId)
            .then(snapshot => {
              if (snapshot.exists()) {
                this.getLists();
              }
            });
        });
      }
    });
  }

  userId: string;
  token: string;

  checkDataExists(id) {
    const ref = this.db.database.ref(id);
    return ref.once('value');
  }

  storeLists() {
    const url =
      `https://kanban-board-51264.firebaseio.com/${this.userId}/lists.json?auth=${this.token}`;
    const body = this.listSrv.getListStore();
    this.http
      .put(url, body)
      .subscribe((response: Response) => {
        return response.json();
      });
  }

  getLists() {
    const url =
      `https://kanban-board-51264.firebaseio.com/${this.userId}/lists.json?auth=${this.token}`;
    this.http
      .get(url)
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
