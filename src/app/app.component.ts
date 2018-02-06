import { Component, OnInit } from '@angular/core';
import { ListService } from './list/list.service';
import { Subscription } from 'rxjs/Subscription';
import {ListModel} from './list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private listSrv: ListService) {}

  editMode = false;
  list: ListModel[]
  subscription = new Subscription();

  switchMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit() {
    this.list = this.listSrv.getList();
    this.subscription = this.listSrv.listAdded.subscribe(list => {
      this.list = list;
    });
  }
}
