import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ListService} from '../services/list.service';
import {ListModel} from '../list.model';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.sass']
})
export class ListFormComponent implements OnInit {

  constructor(private listSrv: ListService) {
  }

  addList(title: string) {
    const newList = new ListModel(title, []);
    this.listSrv.addNewList(newList);
  }

  ngOnInit() {
  }

}
