import {Injectable} from '@angular/core';
import {Account} from './account';
import {ACCOUNTS} from '../mock.data';

@Injectable()
export class AccountService {
  private accounts: Account[];

  constructor() {
    this.accounts = ACCOUNTS;
  }

  /**
   * fetches an array of payment accounts
   * @returns {Promise<Account[]>}
   */
  getAll(): Promise<Account[]> {
    return Promise.resolve(this.accounts);
  }
}
