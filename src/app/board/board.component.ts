import {Component, OnInit, Input} from '@angular/core';
import {BoardModel} from './board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  constructor() {
  }

  @Input() board: BoardModel;

  ngOnInit() {
  }
}
