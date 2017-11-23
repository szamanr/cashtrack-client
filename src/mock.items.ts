import {Item} from './app/item';

export const ITEMS: Item[] = [
  {date: new Date, amount: 1, content: 'test1', category: 'cat1', payment: 'cash', currency: Item.defaultCurrency},
  {date: new Date, amount: 3.15, content: 'test2', category: 'cat1', payment: 'cash', currency: Item.defaultCurrency},
];
