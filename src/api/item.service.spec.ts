import {inject, TestBed} from '@angular/core/testing';
import {ItemService} from './item.service';
import {Item} from './item';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([ItemService], (itemService) => {
    service = itemService;
  }));

  it('should be created', inject([ItemService], () => {
    expect(service).toBeTruthy();
  }));

  it('should have a getAll method', () => {
    const method = service.getAll;
    expect(method).toBeDefined();
  });

  it('should fetch an array of items', () => {
    const result = service.getAll();
    result
      .then(rslt => {
        expect(rslt).toEqual(jasmine.any(Array));
        expect(rslt[0]).toEqual(jasmine.any(Item)); // TODO: what if there are no items?
      });
  });

  it('should have an insert method', () => {
    const method = service.insert;
    expect(method).toBeDefined();
  });

  it('the insert method should create a new item', () => {
    let initialItemsLength: number;

    // fetch items
    service.getAll().then(items => {
      initialItemsLength = items.length;
    }).then(() => {
      // add new item
      service.insert();

      // check if item added
      service.getAll().then(function (fetchedItems) {
        expect(fetchedItems.length).toEqual(initialItemsLength + 1);
      });
    });
  });
})
;