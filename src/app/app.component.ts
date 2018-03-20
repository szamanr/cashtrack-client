import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public appService: AppService) {
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.appService.insertItem();
  }
}
