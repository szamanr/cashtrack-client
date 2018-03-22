import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../api/user';
import {AppService} from '../app.service';
import {UserService} from '../../api/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  formUser = new User('');
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  rowsPerPage: FormControl;
  modal: NgbModalRef;
  foundUser: User;

  constructor(public app: AppService,
              private userService: UserService,
              private modalService: NgbModal) {
    // build user form
    this.setupFormControls();
    this.userForm = this.buildForm();
  }

  ngOnInit() {
  }

  openUserMenu(content) {
    this.modal = this.modalService.open(content);
  }

  /**
   * logs in selected user
   * @param {User} user
   */
  public login(user: User) {
    this.app.setUser(user);

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
    this.app.setUser(null);

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
    // send new user details to server
    // console.log('creating user: ', this.newUser);
    this.userService.users.push(this.formUser);

    // set currently logged in user
    this.app.setUser(this.formUser);
    this.formUser = new User('');
  }

  /**
   * checks if user exists
   * @param event
   */
  onUsernameChanged(event: any) {
    // check if username is already taken
    const username = event.target.value;
    this.foundUser = this.userService.checkUsername(username);
    // this.username.setErrors({'taken': this.usernameTaken});
  }

  /**
   * creates a new user or logs in an existing user after user form submitted.
   */
  onUserFormSubmitted() {
    if (this.foundUser) {
      // check password
      if (this.formUser.password === this.foundUser.password) {
        this.login(this.foundUser);

        // close user menu
        if (this.modal) {
          this.modal.close();
        }
      } else {
        this.password.setErrors({'mismatch': true, 'invalid': true});
      }
    } else {
      // create new user
      this.createUser();

      // close user menu
      if (this.modal) {
        this.modal.close();
      }
    }
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
      // Validators.minLength(8)
    ]);
    this.email = new FormControl('', [
      Validators.email
    ]);
    this.rowsPerPage = new FormControl('', []);
  }

  /**
   * sets up user form with form controls
   * @returns {FormGroup}
   */
  private buildForm() {
    return new FormGroup({
      username: this.username,
      password: this.password,
      email: this.email,
      rowsPerPage: this.rowsPerPage
    });
  }
}
