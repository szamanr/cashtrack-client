export class Currency {
  symbol: string;
  code: string;
  name: string;

  constructor(symbol: string, code: string, name: string) {
    this.symbol = symbol;
    this.code = code;
    this.name = name;
  }
}
