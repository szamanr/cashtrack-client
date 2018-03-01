import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
  // encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  loggedIn: boolean;
  loggedInUser: Object;

  constructor() {
  }

  ngOnInit() {
    // TODO: check if we are logged in
    this.loggedIn = false;
    this.loggedInUser = {full_name: 'user123'};
  }

}
