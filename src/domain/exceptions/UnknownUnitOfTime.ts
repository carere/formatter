export default class UnknownUnitOfTime extends Error {
  constructor(protected unitOfTime: string) {
    super(`Unknown Unit Of Time: '${unitOfTime}'`);
  }
}
