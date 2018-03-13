import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cashtrack';

  constructor(private appService: AppService) {
    this.title = appService.appTitle;
  }

  addItem() {
    // TODO: navigate to table page

    // add new item
    this.appService.insertItem();
  }
}
