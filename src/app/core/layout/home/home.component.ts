import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'gla-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}

  close() {
    this.sidenav.close();
  }
}
