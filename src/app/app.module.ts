import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {CashTableComponent} from './cash-table/cash-table.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
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
