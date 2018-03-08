import {v4 as uuid} from 'uuid';

export class Currency {
  id: number;
  symbol: string;
  code: string;
  name: string;

  constructor(symbol: string, code: string, name: string, id?: number) {
    this.symbol = symbol;
    this.code = code;
    this.name = name;
    this.id = id ? id : uuid();
  }
}
