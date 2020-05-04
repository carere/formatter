export default class HighLimitOverflow extends Error {
  constructor(protected date: string) {
    super(`Stored data end before: '${date}'`);
  }
}
