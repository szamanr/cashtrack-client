export class Item {
  // TODO: get default currency through user settings
  static defaultCurrency = 'EUR';

  date: Date;
  amount: number;
  currency: string; // foreign id
  content: string;
  category: string; // foreign id
  payment: string; // foreign id (account type)
}
