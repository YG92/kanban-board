import { Injectable } from '@angular/core';
import { BoardModel } from './board.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BoardListService {
  constructor() {}

  boards: BoardModel[] = [
    new BoardModel('title', ['gdgd', 'dfsdfsa']),
    new BoardModel('title', ['gdgd', 'dfsdfsa']),
    new BoardModel('title', [
      'gdgd',
      'dfsdfsa',
      'gdgd',
      'dfsdfsa',
      'gdgd',
      'dfsdfsa'
    ]),
    new BoardModel('title', ['gdgd', 'dfsdfsa']),
    new BoardModel('title', ['gdgd', 'dfsdfsa'])
  ];
  boardAdded = new Subject<BoardModel[]>();

  getBoards() {
    return this.boards.slice();
  }

  newBoard(title) {
    this.boards.push(new BoardModel(title, []));
    this.boardAdded.next(this.boards.slice());
  }
}
