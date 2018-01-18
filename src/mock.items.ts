import {Item} from './app/item';

export const ITEMS: Item[] = [
  new Item(new Date, 1, Item.defaultCurrency, 'test1', 'cat1', 'cash'),
  new Item(new Date, 3.15, Item.defaultCurrency, 'test2', 'cat1', 'cash'),
  new Item(new Date, 12.20, Item.defaultCurrency, 'test3', 'cat2', 'debit'),
];
