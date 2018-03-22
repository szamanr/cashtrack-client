import {Component, OnInit} from '@angular/core';
import {Item} from '../../api/item';
import {Account} from '../../api/account';
import {Currency} from '../../api/currency';
import {CurrencyService} from '../../api/currency.service';
import {AccountService} from '../../api/account.service';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-cash-table.page',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.less']
})
export class CashTableComponent implements OnInit {
  app: AppService;
  cols: { field: string; header: string }[];

  items: Observable<Item[]>;
  accounts: Account[] = [];
  accountService: AccountService;
  currencies: Currency[] = [];
  currencyService: CurrencyService;
  rowsPerPage: number;

  /*dateOptions: Intl.DateTimeFormatOptions = {
  };*/

  constructor(app: AppService,
              currencyService: CurrencyService,
              accountService: AccountService) {
    this.app = app;
    this.currencyService = currencyService;
    this.accountService = accountService;

    this.rowsPerPage = (this.app.user && this.app.user.rowsPerPage)
      ? this.app.user.rowsPerPage
      : environment.defaultRowsPerPage;
  }

  ngOnInit() {
    // fetch data
    this.items = this.app.items$;
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
