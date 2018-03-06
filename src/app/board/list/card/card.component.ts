import {
  Component, Input, OnInit,
  Output
} from '@angular/core';
import {ClickOutsideDirective} from '../../../click-outside.directive';
import {ToggleIconsDirective} from '../../../toggle-icons.directive';
import {EditService} from '../services/edit.service';
import {DragDropService} from '../services/drag-drop.service';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  providers: [ToggleIconsDirective, ClickOutsideDirective]

})
export class CardComponent implements OnInit {

  constructor(private listSrv: ListService,
              private dragDrop: DragDropService,
              private editSrv: EditService) {
  }

  @Input() card: string;
  @Input() cardId: number;
  @Input() listId: number;
  iconsToggled = false;
  editMode = false;

  startDrag(card, cardId) {
    this.dragDrop.draggedItem = card;
    this.dragDrop.draggedListId = this.listId;
    this.dragDrop.draggedCardId = cardId;
  }

  toggleIcons(val) {
    this.iconsToggled = val;
  }

  switchMode() {
    this.editMode = !this.editMode;
  }

  editCard(card) {
    this.editSrv.editCard(this.listId, this.cardId, card);
    this.switchMode();
  }

  deleteCard() {
    this.editSrv.deleteCard(this.listId, this.cardId);
  }

  ngOnInit() {
  }

}
