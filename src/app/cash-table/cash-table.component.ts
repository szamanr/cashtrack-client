import {Component, OnInit} from '@angular/core';
import {Item} from '../../api/item';
import {ItemService} from '../../api/item.service';
import {Account} from '../../api/account';
import {Currency} from '../../api/currency';
import {CurrencyService} from '../../api/currency.service';
import {AccountService} from '../../api/account.service';

@Component({
  selector: 'app-cash-table.page',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.less']
})
export class CashTableComponent implements OnInit {
  items: Item[] = [];
  accounts: Account[] = [];
  currencies: Currency[] = [];
  itemService: ItemService;
  currencyService: CurrencyService;
  accountService: AccountService;

  cols: { field: string; header: string }[];

  /*dateOptions: Intl.DateTimeFormatOptions = {
  };*/

  constructor(itemService: ItemService,
              currencyService: CurrencyService,
              accountService: AccountService) {
    this.itemService = itemService;
    this.currencyService = currencyService;
    this.accountService = accountService;
  }

  ngOnInit() {
    // fetch data
    this.itemService.getAll()
      .then(items => this.items = items);
    this.currencyService.getAll()
      .then(currencies => this.currencies = currencies);
    this.accountService.getAll()
      .then(accounts => this.accounts = accounts);

    // prepare table structure
    this.cols = [
      {field: 'date', header: 'date'},
      {field: 'amount', header: 'amount'},
      {field: 'content', header: 'item'},
      {field: 'category', header: 'category'},
      {field: 'account', header: 'account'}
    ];
  }
}
