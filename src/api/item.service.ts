import {Injectable} from '@angular/core';
import {Item} from './item';
import {ITEMS} from '../mock.data';

@Injectable()
export class ItemService {
  private items: Item[];

  constructor() {
    this.items = ITEMS;
  }

  /**
   * fetches an array of items
   * @returns {Promise<Item[]>}
   */
  getAll(): Promise<Item[]> {
    return Promise.resolve(this.items);
  }

  /**
   * adds a new item
   */
  insert(): Promise<Item> {
    const item = new Item();
    this.items.push(item);
    return Promise.resolve(item);
  }
}
