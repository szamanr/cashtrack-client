import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-cash-table.page',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.less'],
})
export class CashTableComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .then(items => this.items = items);
  }

  editItem(target, item: Item) {
    console.log('updating ', item, 'with new data: ', target);
  }

  onSelect(index, element) {
    console.log(element); //
    // this.items[index].content = 'clicked';
  }
}
