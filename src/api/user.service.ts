import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from '../mock.data';

@Injectable()
export class UserService {
  users: User[];

  constructor() {
    this.users = USERS;
  }

  /**
   * checks if username exists in the database. returns the found user.
   * @param {string} username
   * @returns {User}
   */
  checkUsername(username: string): User {
    return this.users.find((element) => {
      return element.username === username;
    });
  }
}
