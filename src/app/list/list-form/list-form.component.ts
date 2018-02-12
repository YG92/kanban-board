import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ListService} from '../list.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.sass']
})
export class ListFormComponent implements OnInit {

  constructor(private listSrv: ListService) {
  }

  addList(title: string) {
    this.listSrv.addNewList(title);
  }

  ngOnInit() {
  }

}
