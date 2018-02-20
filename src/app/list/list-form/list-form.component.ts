import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ListService} from '../services/list.service';
import {ListModel} from '../list.model';
import {CreateService} from '../services/create.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.sass']
})
export class ListFormComponent implements OnInit {

  constructor(private listSrv: ListService,
              private createSrv: CreateService) {
  }

  addList(title: string) {
    const newList = new ListModel(title, []);
    this.createSrv.addNewList(newList);
  }

  ngOnInit() {
  }

}
