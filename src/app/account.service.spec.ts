import {inject, TestBed} from '@angular/core/testing';

import {AccountService} from './account.service';
import {CurrencyService} from './currency.service';
import {Account} from './account';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([AccountService], (accountService) => {
    service = accountService;
  }));

  it('should be created', inject([AccountService], () => {
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
        expect(rslt[0]).toEqual(jasmine.any(Account)); // TODO: what if there are no items?
      });
  });
});
