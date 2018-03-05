import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
  // encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  loggedIn: boolean;
  loggedInUser: Object;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    // TODO: check if we are logged in
    this.loggedIn = true;
    this.loggedInUser = {full_name: 'user123'};
  }

  openUserMenu(content) {
    this.modalService.open(content);
  }
}
