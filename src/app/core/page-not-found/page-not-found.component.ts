import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1 [style.color]="'white'">Page not found!</h1>`
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
