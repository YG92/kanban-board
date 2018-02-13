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
  @Input() listId: number;
  cardId: number;

  onAddCard() {
    this.listSrv.editedList = this.list;
  }

  startDrag(card, cardId) {
    this.listSrv.draggedItem = card;
    this.listSrv.draggedListId = this.listId;
    this.listSrv.draggedCardId = cardId;
    this.cardId = cardId;
  }

  addDropItem() {
    this.onAddCard();
    this.listSrv.addNewCard(this.listSrv.draggedItem);
    this.listSrv.deleteCard();
  }

  ngOnInit() {
  }

}
