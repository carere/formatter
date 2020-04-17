export default class {
  constructor(
    protected data: Array<{ timestamp: number }>,
    protected unitOfTime: string
  ) {}

  handle(): Array<{ timestamp: number }> {
    return [];
  }
}
