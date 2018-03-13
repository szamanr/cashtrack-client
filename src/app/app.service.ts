import {Injectable} from '@angular/core';
import {User} from '../api/user';
import {Item} from '../api/item';
import {ITEMS} from '../mock.data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {
  public appTitle = 'cashtrack';
  public user: User = null;
  items$: Observable<Item[]>;
  private items: Item[];
  private allItems: Item[] = ITEMS;

  constructor() {
    this.items$ = new Observable<Item[]>((observer) => {
      // observer.next(this.items);
      setInterval(() => observer.next(this.items), 1000);
    });
  }

  /**
   * sets the currently logged in user and updates item list
   * @param {User} user
   */
  setUser(user: User) {
    // set current user
    this.user = user;

    // get items belonging to logged in user
    const ownerId = user ? user.id : null;
    this.items = this.allItems.filter((item) => {
      return item.user === ownerId;
    });
  }

  /**
   * adds a new item
   */
  insertItem(): Promise<Item> {
    const item = new Item(1);
    this.items.push(item);
    return Promise.resolve(item);
  }

  /**
   * removes an item
   * @param {Item} item
   * @returns {null}
   */
  deleteItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
