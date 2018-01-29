import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.sass']
})
export class BoardFormComponent implements OnInit {

  constructor() {
  }

  title = new FormControl('');

  onSubmit() {

  }

  ngOnInit() {
  }

}
