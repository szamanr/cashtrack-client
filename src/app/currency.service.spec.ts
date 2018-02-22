import {inject, TestBed} from '@angular/core/testing';

import {CurrencyService} from './currency.service';
import {Currency} from './currency';

describe('CurrencyService', () => {
  let service: CurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([CurrencyService], (currencyService) => {
    service = currencyService;
  }));

  it('should be created', inject([CurrencyService], () => {
    expect(service).toBeTruthy();
  }));

  it('should have a getCurrencies method', () => {
    const method = service.getCurrencies;
    expect(method).toBeDefined();
  });

  it('should fetch an array of items', () => {
    const result = service.getCurrencies();
    result
      .then(rslt => {
        expect(rslt).toEqual(jasmine.any(Array));
        expect(rslt[0]).toEqual(jasmine.any(Currency)); // TODO: what if there are no items?
      });
  });
});
