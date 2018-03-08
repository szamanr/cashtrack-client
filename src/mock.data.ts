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
  new Currency('€', 'EUR', 'euro'),
  new Currency('$', 'USD', 'us dollar'),
  new Currency('£', 'GBP', 'pound sterling')
];

export const ACCOUNTS: Account[] = [
  new Account('cash', 'cash'),
  new Account('debit', 'card'),
  new Account('credit', 'card'),
  new Account('transfer', 'bank')
];

// TODO: the account and currency should be an object
export const ITEMS: Item[] = [
  new Item(new Date, 1, '€', 'test1', 'cat1', 'cash'),
  new Item(new Date, 3.15, '€', 'test2', 'cat1', 'cash'),
  new Item(new Date, 12.20, '€', 'test3', 'cat2', 'debit')
];
