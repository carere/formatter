export default class LowLimitOverflow extends Error {
  constructor(protected date: string) {
    super(`Stored data start after: '${date}'`);
  }
}
