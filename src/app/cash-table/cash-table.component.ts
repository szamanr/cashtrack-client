import {Component, OnInit} from '@angular/core';
import {Item} from '../../api/item';
import {Account} from '../../api/account';
import {Currency} from '../../api/currency';
import {CurrencyService} from '../../api/currency.service';
import {AccountService} from '../../api/account.service';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Subscription} from 'rxjs/Subscription';

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
  environment: any;
  private subscription: Subscription;

  /*dateOptions: Intl.DateTimeFormatOptions = {
  };*/

  constructor(app: AppService,
              currencyService: CurrencyService,
              accountService: AccountService) {
    this.app = app;
    this.currencyService = currencyService;
    this.accountService = accountService;

    this.environment = environment;
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

    // get notified when a new item is added
    this.subscription = this.app.newItem$.subscribe((newItemId) => {
      console.log('item added with id: ', newItemId);
      // TODO: focus on the element corresponding to the new item
    });
  }
}
