import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() {
  }

  title = new FormControl('', Validators.pattern(/\w/));
  @Input() placeholderText: string;
  @Output() submitted = new EventEmitter<string>();

  onSubmit() {
    const value = this.title.value;
    this.submitted.emit(value);
    this.reset();
  }

  reset() {
    this.title.reset();
  }

  ngOnInit() {
  }

}
