import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {ListModel} from './list.model';
import {ListService} from './services/list.service';
import {DragDropService} from './services/drag-drop.service';
import {CreateService} from './services/create.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private listSrv: ListService,
              private dragDrop: DragDropService,
              private createSrv: CreateService) {
  }

  @Input() list: ListModel;
  @Input() listId: number;

  startDrag(card, cardId) {
    this.dragDrop.draggedItem = card;
    this.dragDrop.draggedList = this.list;
    this.dragDrop.draggedCardId = cardId;
  }

  addDropItem() {
    this.dragDrop.dropCard(this.list);
    this.dragDrop.deleteCard();
  }

  addCard(title: string) {
    this.createSrv.addNewCard(this.list, title);
  }

  ngOnInit() {
  }

}
