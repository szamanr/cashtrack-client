import {v4 as uuid} from 'uuid';

export class Account {
  id: number;
  user: number; // foreign id
  name: string;
  type: string;

  constructor(user: number, name: string, type: string, id?: number) {
    this.user = user;
    this.name = name;
    this.type = type;
    this.id = id ? id : uuid();
  }
}
