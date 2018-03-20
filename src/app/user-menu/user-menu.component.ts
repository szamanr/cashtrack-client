import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../api/user';
import {AppService} from '../app.service';
import {USERS} from '../../mock.data';
import {UserService} from '../../api/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  newUser = new User('');
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  modal: NgbModalRef;
  usernameTaken = false;

  constructor(public appService: AppService,
              private userService: UserService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.setUser(USERS[0]);

    // build user form
    this.setupFormControls();
    this.userForm = this.buildForm();
  }

  openUserMenu(content) {
    this.modal = this.modalService.open(content);
  }

  /**
   * logs in selected user
   * @param {User} user
   */
  public login(user: User) {
    this.appService.setUser(user);

    // close user menu
    if (this.modal) {
      this.modal.close();
    }
  }

  /**
   * logs out the current user
   */
  public logout() {
    // log out
    this.appService.setUser(null);

    // close user menu
    if (this.modal) {
      this.modal.close();
    }
  }

  /**
   * registers new user
   */
  // TODO: refactor
  createUser() {
    // if user with chosen username exists, log in
    const existingUser = USERS.find((user) => {
      return user.username === this.newUser.username;
    });
    if (existingUser) {
      // check password
      if (this.newUser.password === existingUser.password) {
        this.login(existingUser);

        // close user menu
        if (this.modal) {
          this.modal.close();
        }
      } else {
        this.password.setErrors({'mismatch': true, 'invalid': true});
      }

      return;
    }

    // send new user details to server
    // console.log('creating user: ', this.newUser);

    // set currently logged in user
    this.appService.setUser(this.newUser);
    this.newUser = new User('');

    // close user menu
    if (this.modal) {
      this.modal.close();
    }
  }

  /**
   * checks if user exists
   * @param event
   */
  onUsernameChanged(event: any) {
    // check if username is already taken
    const username = event.target.value;
    this.usernameTaken = this.userService.checkUsername(username);
    // this.username.setErrors({'taken': this.usernameTaken});
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
}
