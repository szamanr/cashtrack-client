import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {CashTableComponent} from './cash-table/cash-table.component';
import {AppRoutingModule} from './app-routing.module';
import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurrencyService} from '../api/currency.service';
import {AccountService} from '../api/account.service';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {AppService} from './app.service';
import {UserService} from '../api/user.service';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContenteditableDirective} from 'ng-contenteditable';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // app components
    AppComponent,
    CashTableComponent,
    UserMenuComponent,

    // helpers
    ContenteditableDirective
  ],
  providers: [
    AppService,
    UserService,
    CurrencyService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
