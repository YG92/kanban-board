import {Injectable} from '@angular/core';
import {BoardModel} from './board.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BoardListService {

  constructor() {
  }

  boards: BoardModel[] = [];
  boardAdded = new Subject<BoardModel[]>();

  getBoards() {
    return this.boards.slice();
  }

  newBoard(title) {
    this.boards.push(new BoardModel(title, []));
    this.boardAdded.next(this.boards.slice());

  }
}
