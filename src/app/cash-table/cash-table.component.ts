import {Component, OnInit} from '@angular/core';
import {Item} from '../../api/item';
import {ItemService} from '../../api/item.service';
import {Account} from '../../api/account';
import {Currency} from '../../api/currency';
import {CurrencyService} from '../../api/currency.service';
import {AccountService} from '../../api/account.service';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cash-table.page',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.less']
})
export class CashTableComponent implements OnInit {
  items: Observable<Item[]>;
  accounts: Account[] = [];
  currencies: Currency[] = [];
  appService: AppService;
  itemService: ItemService;
  currencyService: CurrencyService;

  accountService: AccountService;
  cols: { field: string; header: string }[];
  rowsPerPage: number;

  /*dateOptions: Intl.DateTimeFormatOptions = {
  };*/

  constructor(appService: AppService,
              itemService: ItemService,
              currencyService: CurrencyService,
              accountService: AccountService) {
    this.appService = appService;
    this.itemService = itemService;
    this.currencyService = currencyService;
    this.accountService = accountService;
  }

  ngOnInit() {
    // fetch data
    this.items = this.appService.items$;
    this.currencyService.getAll()
      .then(currencies => this.currencies = currencies);
    this.accountService.getAll()
      .then(accounts => this.accounts = accounts);

    // TODO: fetch user settings
    this.rowsPerPage = 10;

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
