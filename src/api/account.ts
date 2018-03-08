import {v4 as uuid} from 'uuid';

export class Account {
  id: number;
  name: string;
  type: string;

  constructor(name: string, type: string, id?: number) {
    this.name = name;
    this.type = type;
    this.id = id ? id : uuid();
  }
}
