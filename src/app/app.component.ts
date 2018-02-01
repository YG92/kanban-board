import {Component, OnInit} from '@angular/core';
import {BoardModel} from './board/board.model';
import {BoardListService} from './board/board-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private boardSrv: BoardListService) {
  }

  editMode = false;
  boards: BoardModel[];
  subscription = new Subscription();

  switchMode() {
    this.editMode = !this.editMode;
    console.log(this.editMode);
  }

  ngOnInit() {
    this.boards = this.boardSrv.getBoards();
    this.subscription = this.boardSrv.boardAdded.subscribe(boards => {
        this.boards = boards;
      }
    );
  }
}

