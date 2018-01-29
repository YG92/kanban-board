import {Component} from '@angular/core';
import {BoardModel} from './board/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  boards = [];
  editMode = false;


  addBoard() {
    this.editMode = true;
    console.log(this.boards);
  }
}

