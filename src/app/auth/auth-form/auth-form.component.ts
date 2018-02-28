import {
  Component, EventEmitter,
  OnInit, Output
} from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {

  constructor() {
  }

  @Output() submitted = new EventEmitter<NgForm>();

  onSubmit(form: NgForm) {
    this.submitted.emit(form);
  }

  ngOnInit() {
  }

}
