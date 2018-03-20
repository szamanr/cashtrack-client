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
  let service: AppService;
  // let usernameElement: DebugElement;

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

  beforeEach(inject([AppService], (appService) => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = appService;

    /* TODO
    usernameElement = fixture.debugElement.query(By.css('#guest-username'));
    spyOn(component, 'onUsernameChanged').and.callThrough();*/
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in a user', () => {
    service.setUser(null);
    const user1 = new User('user12345');
    component.login(user1);
    expect(service.user).toEqual(user1);
  });

  it('should log out a user', () => {
    const user1 = new User('user12345');
    service.setUser(user1);
    component.logout();
    expect(service.user).toBeNull();
  });

  it('should register a new user', () => {
    service.setUser(null);
    const user1 = new User('user12345');
    component.newUser = user1;
    component.createUser();
    expect(service.user).toBeDefined();
    expect(service.user.username).toEqual(user1.username);
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
});
