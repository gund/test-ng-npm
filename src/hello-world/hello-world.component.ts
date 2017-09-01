import { myPrivateFn } from './util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: 'Hello from app-hello-world',
  styles: ['']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myPrivateFn();
  }

}
