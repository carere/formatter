export default class {
  constructor(
    private id: string,
    private open: number,
    private close: number,
    private low: number,
    private high: number
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
}
