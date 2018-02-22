import { Component } from '@angular/core';
import {ItemService} from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cashtrack';

  constructor(private itemService: ItemService) {
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.itemService.insert();
  }
}
