import {inject, TestBed} from '@angular/core/testing';
import {ItemService} from './item.service';
import {Item} from './item';
import {AppService} from '../app/app.service';
import {USERS} from '../mock.data';

describe('ItemService', () => {
  let appService: AppService;
  let itemService: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, ItemService]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([AppService, ItemService], (appServ, service) => {
    appService = appServ;
    itemService = service;
    appService.user = USERS[0];
  }));

  it('should be created', inject([ItemService], () => {
    expect(itemService).toBeTruthy();
  }));

  it('should have a getAll method', () => {
    const method = itemService.getAll;
    expect(method).toBeDefined();
  });

  it('should fetch an array of items', () => {
    const result = itemService.getAll(appService.user);
    result
      .then(rslt => {
        expect(rslt).toEqual(jasmine.any(Array));
        expect(rslt[0]).toEqual(jasmine.any(Item)); // TODO: what if there are no items?
      });
  });

  it('should have an insert method', () => {
    const method = itemService.insert;
    expect(method).toBeDefined();
  });

  it('the insert method should create a new item', () => {
    let initialItemsLength: number;

    // fetch items
    itemService.getAll(appService.user).then(items => {
      initialItemsLength = items.length;
    }).then(() => {
      // add new item
      itemService.insert();

      // check if item added
      itemService.getAll(appService.user).then(function (fetchedItems) {
        expect(fetchedItems.length).toEqual(initialItemsLength + 1);
      });
    });
  });
})
;
