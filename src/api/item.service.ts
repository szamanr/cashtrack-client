import {Injectable} from '@angular/core';
import {Item} from './item';
import {ITEMS} from '../mock.data';
import {User} from './user';

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
  getAll(owner: User): Promise<Item[]> {
    const ownerId = owner ? owner.id : null;
    return Promise.resolve(this.items.filter((item) => {
      return item.user === ownerId;
    }));
  }

  /**
   * adds a new item
   */
  insert(): Promise<Item> {
    const item = new Item(1);
    this.items.push(item);
    return Promise.resolve(item);
  }

  /**
   * removes an item
   * @param {Item} item
   * @returns {null}
   */
  delete(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
