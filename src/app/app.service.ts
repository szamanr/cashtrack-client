import { Injectable } from '@angular/core';
import {User} from '../api/user';

@Injectable()
export class AppService {
  public appTitle = 'cashtrack';
  public user: User = null;

  constructor() { }

}
