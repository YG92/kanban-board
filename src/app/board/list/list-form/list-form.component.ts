import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ListService} from '../services/list.service';
import {ListModel} from '../list.model';
import {EditService} from '../services/edit.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html'
})
export class ListFormComponent implements OnInit {
  constructor(private listSrv: ListService,
              private editSrv: EditService) {
  }

  addList(title: string) {
    const newList = new ListModel(title, []);
    this.editSrv.addNewList(newList);
  }

  ngOnInit() {
  }
}
