import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dgi-shell',
  template: `
    <section>
      <dgi-top-bar></dgi-top-bar>
      <dgi-main-content></dgi-main-content>
      
    </section>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
