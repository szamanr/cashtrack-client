import { Injectable } from '@angular/core';
import {Currency} from './currency';
import {CURRENCIES} from '../mock.data';

@Injectable()
export class CurrencyService {
  private currencies: Currency[];

  constructor() {
    this.currencies = CURRENCIES;
  }

  /**
   * fetches an array of currencies
   * @returns {Promise<Currency[]>}
   */
  getAll(): Promise<Currency[]> {
    return Promise.resolve(this.currencies);
  }
}
