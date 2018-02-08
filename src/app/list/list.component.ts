import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from './list.model';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(public listSrv: ListService) {
  }

  cardEditMode = false;
  @Input() list: ListModel;

  onAddCard() {
    this.cardEditMode = true;
    this.listSrv.editedList = this.list;
  }

  ngOnInit() {
  }

}
