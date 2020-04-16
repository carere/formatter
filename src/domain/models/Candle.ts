export default class {
  constructor(
    private id: string,
    private open: number,
    private close: number,
    private high: number,
    private low: number
  ) {}

  getId(): string {
    return this.id;
  }

  getLow(): number {
    return this.low;
  }
  getHigh(): number {
    return this.high;
  }
  getClose(): number {
    return this.close;
  }
  getOpen(): number {
    return this.open;
  }

  setClose(close: number) {
    this.close = close;
  }
  setLow(low: number) {
    this.low = low;
  }
  setHigh(high: number) {
    this.high = high;
  }
  setOpen(open: number) {
    this.open = open;
  }
}
