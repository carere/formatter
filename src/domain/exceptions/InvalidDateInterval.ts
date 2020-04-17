export default class InvalidDateInterval extends Error {
  constructor(protected from: number, protected to: number) {
    super(
      `Unable to handle interval from 
      '${new Date(from).toUTCString()}'
      to 
      '${new Date(to).toUTCString()}'`
    );
  }
}
