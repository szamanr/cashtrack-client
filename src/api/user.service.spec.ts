import {inject, TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {User} from './user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  beforeEach(inject([UserService], (userService) => {
    service = userService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('onUsernameChanged method',() => {
    it('should return true if username exists', () => {
      const user1 = new User('user1');
      service.users.push(user1);

      expect(service.checkUsername(user1.username)).toBeTruthy();
    });

    it('should return false if username doesn\'t exist', () => {
      service.users = [];

      expect(service.checkUsername('inexistingUser')).toBeFalsy();
    });
  });
});
