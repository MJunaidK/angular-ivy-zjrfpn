import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 7000,
    });
  }
}
