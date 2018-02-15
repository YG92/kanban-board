import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {ListModel} from './list.model';
import {ListService} from './services/list.service';
import {DragDropService} from './services/drag-drop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private listSrv: ListService,
              private dragDrop: DragDropService) {
  }

  @Input() list: ListModel;
  @Input() listId: number;

  startDrag(card, cardId) {
    this.dragDrop.draggedItem = card;
    this.dragDrop.draggedListId = this.listId;
    this.dragDrop.draggedCardId = cardId;
  }

  addDropItem() {
    this.dragDrop.dropCard(this.listId);
    this.dragDrop.deleteCard();
  }

  onAddCard() {
    this.listSrv.editedListId = this.listId;
  }

  ngOnInit() {
  }

}
