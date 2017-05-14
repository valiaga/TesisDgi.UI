import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dgi-top-bar',
  template: `
    <nav>
      <a [routerLink]="[ '' ]">Home</a>
      <a [routerLink]="[ 'about' ]">About</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
