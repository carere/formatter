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
}
