export default class {
  constructor(private id: string, private amount: number) {}

  getId(): string {
    return this.id;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number) {
    this.amount = amount;
  }
}
