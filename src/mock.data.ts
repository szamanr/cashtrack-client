// TODO: this is some mock data that should be fetched from the server

import {Item} from './api/item';
import {Currency} from './api/currency';
import {Account} from './api/account';
import {User} from './api/user';

export const USERS: User[] = [
  new User('user1', '123qweasd', 'user1@example.com', 1),
  new User('user2', '123qweasd', 'user2@example.com', 2),
  new User('user3', '123qweasd', 'user3@example.com', 3),
  new User('user4', '123qweasd', 'user4@example.com', 4)
];

export const CURRENCIES: Currency[] = [
  new Currency('€', 'EUR', 'euro', 1),
  new Currency('$', 'USD', 'us dollar', 2),
  new Currency('£', 'GBP', 'pound sterling', 3)
];

export const ACCOUNTS: Account[] = [
  new Account(1, 'cash', 'cash', 1),
  new Account(1, 'debit', 'card', 2),
  new Account(1, 'credit', 'card', 3),
  new Account(1, 'transfer', 'bank', 4)
];

// TODO: the account and currency should be an object
export const ITEMS: Item[] = [
  new Item(1, new Date, 1, '€', 'test1', 'cat1', 'cash', 1),
  new Item(1, new Date, 3.15, '€', 'test2', 'cat1', 'cash', 2),
  new Item(1, new Date, 12.20, '€', 'test3', 'cat2', 'debit', 3)
];
