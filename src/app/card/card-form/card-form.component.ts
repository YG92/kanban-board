import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ListService} from '../../list/list.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {

  constructor(private listSrv: ListService) {
  }

  title = new FormControl('', [Validators.required]);

  onSubmit() {
    this.listSrv.newCard(this.title.value);
  }

  ngOnInit() {
  }
}
