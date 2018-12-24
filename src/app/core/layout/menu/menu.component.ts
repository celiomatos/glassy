import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gla-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  closeSideNav() {
    this.close.emit();
  }
}
