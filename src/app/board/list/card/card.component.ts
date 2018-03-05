import {
  Component, Input, OnInit,
  Output
} from '@angular/core';
import {EditModeDirective} from '../../../edit-mode.directive';
import {EditService} from '../services/edit.service';
import {DragDropService} from '../services/drag-drop.service';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  providers: [EditModeDirective]

})
export class CardComponent implements OnInit {

  constructor(private listSrv: ListService,
              private dragDrop: DragDropService,
              private editSrv: EditService) {
  }

  @Input() card: string;
  @Input() cardId: number;
  @Input() listId: number;
  editModeEnabled = false;

  startDrag(card, cardId) {
    this.dragDrop.draggedItem = card;
    this.dragDrop.draggedListId = this.listId;
    this.dragDrop.draggedCardId = cardId;
  }

  switchMode(enabled) {
    this.editModeEnabled = enabled;
  }

  deleteCard() {
    this.editSrv.deleteCard(this.listId, this.cardId);
  }

  ngOnInit() {
  }

}
