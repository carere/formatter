export default class {
  private open: number;
  private close: number;
  private low: number;
  private high: number;

  constructor(open: number, close: number, low: number, high: number) {
    this.open = open;
    this.close = close;
    this.low = low;
    this.high = high;
  }
}
