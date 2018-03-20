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
   * checks if username exists in the database
   * @param {string} username
   * @returns {boolean}
   */
  checkUsername(username: string) {
    const user = this.users.find((element) => {
      return element.username === username;
    });
    return !!user;
  }
}
