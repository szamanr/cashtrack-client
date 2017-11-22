// TODO: get default currency through user settings
const defaultCurrency = 'EUR';

export class Item {
  date: Date;
  amount: number;
  currency: string; // foreign id
  content: string;
  category: string; // foreign id
  payment: string; // foreign id (account type)

  constructor(date: Date, amount: number, content: string, category: string, payment: string) {
    this.date = date;
    this.amount = amount;
    this.currency = defaultCurrency;
    this.content = content;
    this.category = category;
    this.payment = payment;
  }
}
