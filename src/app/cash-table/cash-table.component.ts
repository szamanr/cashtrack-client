import {Component, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-cash-table',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.less'],
})
export class CashTableComponent implements OnInit {
  items: Item[] = [];

  constructor() {
    // TODO: fetch items through service
    this.items.push(
      new Item(new Date, 1, 'test1', 'cat1', 'cash'),
      new Item(new Date, 2, 'test2', 'cat1', 'cash')
    );
  }

  ngOnInit() {
  }

}
