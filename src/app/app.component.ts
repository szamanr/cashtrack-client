import {Component} from '@angular/core';
import {AppService} from './app.service';
import {USERS} from '../mock.data';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  environment: any;

  constructor(public app: AppService) {
    // set the default user for now
    app.setUser(USERS[0]);

    this.environment = environment;
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.app.insertItem();
  }
}
