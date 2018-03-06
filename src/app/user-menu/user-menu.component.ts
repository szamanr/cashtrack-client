import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  loggedIn: boolean;
  loggedInUser: Object;
  private usernameForm: FormGroup;
  private username: FormControl;
  private password: FormControl;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    // TODO: check if we are logged in
    this.loggedIn = true;
    this.loggedInUser = {full_name: 'user123', password: 'ppppppppp'};

    // build user form
    this.setupFormControls();
    this.usernameForm = this.buildForm();
  }

  openUserMenu(content) {
    this.modalService.open(content);
  }

  /**
   * sets up user form controls
   */
  private setupFormControls() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  /**
   * sets up user form with form controls
   * @returns {FormGroup}
   */
  private buildForm() {
    return new FormGroup({
      username: this.username,
      password: this.password
    });
  }
}
