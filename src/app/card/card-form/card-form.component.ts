import {Component, OnInit} from '@angular/core';
import {ListService} from '../../list/list.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {
  constructor(private listSrv: ListService) {
  }

  addCard(title: string) {
    this.listSrv.addNewCard(title);
  }

  ngOnInit() {
  }
}
