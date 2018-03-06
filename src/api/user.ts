import {v4 as uuid} from 'uuid';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;


  constructor(username: string, password?: string, email?: string, id?: number) {
    this.username = username;
    this.password = password;
    this.id = id ? id : uuid();
    this.email = email;
  }
}
