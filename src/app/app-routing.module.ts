import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CashTableComponent} from './cash-table/cash-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: 'table', component: CashTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
