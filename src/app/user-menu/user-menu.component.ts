import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../api/user';
import {AppService} from '../app.service';
import {USERS} from '../../mock.data';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  loggedIn: boolean;
  newUser = new User('');
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  modal: NgbModalRef;

  constructor(public appService: AppService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.user = USERS[0];
    // TODO: check if we are logged in
    this.loggedIn = typeof this.appService.user !== 'undefined';

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
    this.appService.user = null;
    this.loggedIn = false;

    // close user menu
    this.modal.close();
  }

  /**
   * logs in selected user
   * @param {User} user
   */
  public login(user: User) {
    this.appService.user = user;
    this.loggedIn = true;

    // close user menu
    this.modal.close();
  }

  /**
   * registers new user
   */
  createUser() {
    // if user with chosen username exists, log in
    const existingUser = USERS.find((user) => {
      return user.username === this.newUser.username;
    });
    if (existingUser) {
      this.login(existingUser);
      return;
    }

    // send new user details to server
    // console.log('creating user: ', this.newUser);

    // set currently logged in user
    this.appService.user = this.newUser;
    this.newUser = new User('');
    this.loggedIn = true; // TODO: auto-update

    // close user menu
    this.modal.close();
  }
}
