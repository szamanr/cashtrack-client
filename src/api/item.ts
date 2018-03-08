import {v4 as uuid} from 'uuid';

export class Item {
  // TODO: get default currency through user settings
  static defaultCurrency = '€';

  id: number;
  date: Date;
  amount: number;
  currency: string; // foreign id
  content: string;
  category: string; // foreign id
  account: string; // foreign id (account type)

  constructor(date: Date = new Date, amount: number = 0, currency: string = '', content: string = '',
              category: string = '', account: string = '', id?: number) {
    this.date = date;
    this.amount = amount;
    this.currency = currency || Item.defaultCurrency;
    this.content = content;
    this.category = category;
    this.account = account;
    this.id = id ? id : uuid();
  }
}
