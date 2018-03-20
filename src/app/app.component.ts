import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public app: AppService) {
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.app.insertItem();
  }
}
