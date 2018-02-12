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

  @Input() list: ListModel;

  onAddCard() {
    this.listSrv.editedList = this.list;
  }

  startDrag(card, id) {
    this.listSrv.draggedItem = card;
    // this.listSrv.removeCard(this.list, id);
  }

  addDropItem() {
    this.onAddCard();
    this.listSrv.addNewCard(this.listSrv.draggedItem);
  }

  ngOnInit() {
  }

}
