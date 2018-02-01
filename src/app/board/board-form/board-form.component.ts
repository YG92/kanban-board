import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BoardListService} from '../board-list.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.sass']
})
export class BoardFormComponent implements OnInit {

  constructor(private boardSrv: BoardListService) {
  }

  title = new FormControl('');
  @Output() submitted = new EventEmitter<boolean>();

  onSubmit() {
    this.boardSrv.newBoard(this.title.value);
    this.submitted.emit(true);
  }

  ngOnInit() {
  }

}
