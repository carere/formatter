import { given, then, when, binding } from "cucumber-tsflow";
import assert from "assert";
import FormatByUnitOfTime from "../../../src/usecase/FormatByUnitOfTime";
import UnknownUnitOfTime from "../../../src/domain/exceptions/UnknownUnitOfTime";
import InvalidDateInterval from "../../../src/domain/exceptions/InvalidDateInterval";

@binding()
export class FormatDataSteps {
  constructor(
    protected from: number,
    protected to: number,
    protected data: Array<{ timestamp: number }>,
    protected result: Array<{ timestamp: number }>,
    protected error: Error
  ) {
    this.data = [];
    this.result = [];
  }

  @given("a time interval from {string} to {string}")
  public aTimeIntervalFromTo(from: string, to: string) {
    this.from = Date.parse(from);
    this.to = Date.parse(to);
  }

  @given("some data timestamp by minutes")
  public someDataTimestampByMinutes() {
    for (let i = this.from; i <= this.to; i += 60000) {
      this.data.push({ timestamp: i });
    }
  }

  @when("we format those data for unit of time {string}")
  public weFormatThoseDataForUnitOfTime(unitOfTime: string) {
    try {
      this.result = new FormatByUnitOfTime(this.data, unitOfTime).handle();
    } catch (e) {
      this.error = e;
    }
  }

  @then("we should get {string} entries as result")
  public weShouldGetEntriesAsResult(nbEntries: string) {
    assert.strictEqual(this.result.length, +nbEntries);
  }

  @then("an alert for {string} should be thrown")
  public anAlertForShouldBeThrown(alertType: string) {
    switch (alertType) {
      case "unknow unit of time":
        assert.equal(this.error instanceof UnknownUnitOfTime, true);
        break;

      case "invalid date interval":
        assert.equal(this.error instanceof InvalidDateInterval, true);
        break;

      default:
        throw "Should throw an exception";
    }
  }
}
