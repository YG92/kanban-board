import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BoardListService} from '../../board/board-list.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {

  constructor(private boardSrv: BoardListService) {
  }

  title = new FormControl('', [Validators.required]);
  @Output() submitted = new EventEmitter<boolean>();
  @Input() boardList: Array<string>;

  onSubmit() {
    this.boardSrv.newCard(this.title.value, this.boardList);
    this.submitted.emit(true);
  }

  ngOnInit() {
  }
}
