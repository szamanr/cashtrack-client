import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {CashTableComponent} from './cash-table/cash-table.component';
import {AppRoutingModule} from './app-routing.module';
import {ItemService} from '../api/item.service';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {CurrencyService} from '../api/currency.service';
import {AccountService} from '../api/account.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    TableModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CashTableComponent,
  ],
  providers: [
    ItemService,
    CurrencyService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
