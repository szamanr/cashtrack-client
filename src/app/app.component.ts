import {Component} from '@angular/core';
import {AppService} from './app.service';
import {USERS} from '../mock.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public app: AppService) {
    // set the default user for now
    app.setUser(USERS[0]);
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.app.insertItem();
  }
}
