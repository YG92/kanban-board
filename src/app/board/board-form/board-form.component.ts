import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BoardListService } from '../board-list.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html'
})
export class BoardFormComponent implements OnInit {
  constructor(private boardSrv: BoardListService) {}

  title = new FormControl('', [Validators.required]);
  @Output() submitted = new EventEmitter<boolean>();

  onSubmit() {
    this.boardSrv.newBoard(this.title.value);
    this.submitted.emit(true);
  }

  ngOnInit() {}
}
