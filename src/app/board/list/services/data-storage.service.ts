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
  url: string;

  storeLists() {
    this.http
      .put(this.url, this.listSrv.getListStore()
      )
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  getLists() {
    this.af.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        user.getIdToken().then(token => {
          this.token = token;
          this.url =
            `https://kanban-board-51264.firebaseio.com/${this.userId}/lists.json?auth=${this.token}`;
          this.http
            .get(this.url)
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
    });
  }
}
