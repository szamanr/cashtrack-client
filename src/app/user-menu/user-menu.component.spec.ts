import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {UserMenuComponent} from './user-menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../app.service';
import {User} from '../../api/user';
import {UserService} from '../../api/user.service';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let app: AppService;
  let users: UserService;
  // let usernameElement: DebugElement;

  // set up imports
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserMenuComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [AppService, UserService, NgbModal]
    }).compileComponents();
  }));

  beforeEach(inject([AppService, UserService], (appService, userService) => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = appService;
    users = userService;

    /* TODO
    usernameElement = fixture.debugElement.query(By.css('#guest-username'));
    spyOn(component, 'onUsernameChanged').and.callThrough();*/
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in a user', () => {
    app.setUser(null);
    const user1 = new User('user12345');
    component.login(user1);
    expect(app.user).toEqual(user1);
  });

  it('should log out a user', () => {
    const user1 = new User('user12345');
    app.setUser(user1);
    component.logout();
    expect(app.user).toBeNull();
  });

  it('should register a new user', () => {
    app.setUser(null);
    const user1 = new User('user12345');
    component.formUser = user1;
    component.createUser();
    expect(app.user).toBeDefined();
    expect(app.user.username).toEqual(user1.username);
  });

  /* TODO
  it('should check if username is taken after username change', () => {
    usernameElement.nativeElement.value = 'asd';
    usernameElement.nativeElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.onUsernameChanged).toHaveBeenCalled();
  });*/

  it('should build a user form', () => {
    component.ngOnInit();
    expect(component.userForm).toEqual(jasmine.any(FormGroup));
  });

  // TODO: find a way to break these into separate describe() statements while being able to use the app variable
  it('the onUserFormSubmitted method should log in if password is correct', () => {
    // make sure we are not logged in
    app.setUser(null);
    // username exists
    component.foundUser = users.users[0];
    // user types correct credentials
    component.formUser = new User(component.foundUser.username, component.foundUser.password);

    component.onUserFormSubmitted();
    expect(app.user).toEqual(component.foundUser);
  });

  it('the onUserFormSubmitted method should not log in if password is incorrect', () => {
    // make sure we are not logged in
    app.setUser(null);
    // username exists
    component.foundUser = users.users[0];
    // user tries to log in with a wrong password
    component.formUser = new User(component.foundUser.username, 'no way somebody has this password!');

    component.onUserFormSubmitted();
    expect(app.user).toBeNull();
  });

  it('the onUserFormSubmitted method should create new user if user not found', () => {
    // make sure we are not logged in
    app.setUser(null);
    // username doesn't exist
    component.foundUser = null;
    // user types some username
    component.formUser = new User('new user');

    const previousUsersCount = users.users.length;
    component.onUserFormSubmitted();
    expect(app.user).toEqual(jasmine.any(User));
    expect(users.users.length).toEqual(previousUsersCount + 1);
  });
});
