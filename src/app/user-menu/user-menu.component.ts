import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../api/user';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  loggedIn: boolean;
  loggedInUser: User;
  newUser = new User('');
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  modal: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    // this.loggedInUser = new User('user123', '123qweasd', 'user123@example.com');
    // TODO: check if we are logged in
    this.loggedIn = typeof this.loggedInUser !== 'undefined';

    // build user form
    this.setupFormControls();
    this.userForm = this.buildForm();
  }

  openUserMenu(content) {
    this.modal = this.modalService.open(content);
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
      Validators.minLength(8)
    ]);
    this.email = new FormControl('', [
      Validators.email
    ]);
  }

  /**
   * sets up user form with form controls
   * @returns {FormGroup}
   */
  private buildForm() {
    return new FormGroup({
      username: this.username,
      password: this.password,
      email: this.email
    });
  }

  /**
   * logs out the current user
   */
  public logout() {
    // log out
    this.loggedInUser = null;
    this.loggedIn = false;

    // close user menu
    this.modal.close();
  }

  /**
   * registers new user
   */
  createUser() {
    // send new user details to server
    console.log('creating user: ', this.newUser);

    // set currently logged in user
    this.loggedInUser = this.newUser;
    this.newUser = new User('');
    this.loggedIn = true; // TODO: auto-update

    // close user menu
    this.modal.close();
  }
}
