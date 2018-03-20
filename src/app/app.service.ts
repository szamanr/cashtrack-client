import {Injectable} from '@angular/core';
import {User} from '../api/user';
import {Item} from '../api/item';
import {ITEMS} from '../mock.data';
import {Observable} from 'rxjs/Observable';

@Injectable()
/**
 * this service provides global app configuration and stores the application state.
 */
export class AppService {
  config = {
    'production': false,
    'development': true,
    'title': 'cashtrack',
  };

  public user: User = null;
  private userId: number;

  items$: Observable<Item[]>;
  private items: Item[];
  private allItems: Item[];

  constructor() {
    // fetch items from server
    this.allItems = ITEMS;

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
    this.userId = user ? user.id : null;

    // get items belonging to logged in user
    this.setItemsForCurrentUser();
  }

  /**
   * adds a new item
   */
  insertItem(): Promise<Item> {
    // create empty item
    const item = new Item(this.userId);

    // send item to server
    this.allItems.push(item);

    // update current items
    this.setItemsForCurrentUser();

    return Promise.resolve(item);
  }

  /**
   * removes an item
   * @param {Item} item
   * @returns {null}
   */
  deleteItem(item: Item): void {
    // send remove request to server
    this.allItems.splice(this.allItems.indexOf(item), 1);

    // update current items
    this.setItemsForCurrentUser();
  }

  /**
   * loads items belonging to current user
   */
  private setItemsForCurrentUser() {
    this.items = this.allItems.filter((item) => {
      return item.user === this.userId;
    });
  }
}
