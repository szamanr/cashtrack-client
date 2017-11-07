import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CashTableComponent} from './cash-table/cash-table.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CashTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
