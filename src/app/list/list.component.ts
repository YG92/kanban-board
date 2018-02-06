import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from './list.model';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private listSrv: ListService) {
  }

  cardEditMode = false;
  @Input() listItem: ListModel;

  onAddCard() {
    this.listSrv.editedList = this.listItem;
    this.cardEditMode = true;
  }

  ngOnInit() {
  }

}
