import { given, then, when, binding } from "cucumber-tsflow";
import assert from "assert";
import FormatByUnitOfTime from "../../../src/usecase/FormatByUnitOfTime";
import UnknownUnitOfTime from "../../../src/domain/exceptions/UnknownUnitOfTime";
import HighLimitOverflow from "../../../src/domain/exceptions/HighLimitOverflow";
import LowLimitOverflow from "../../../src/domain/exceptions/LowLimitOverflow";
import { TableDefinition } from "cucumber";

@binding()
export class FormatDataSteps {
  constructor(
    protected from: number,
    protected to: number,
    protected data: Array<{ timestamp: number }>,
    protected result: Array<Array<{ timestamp: number }>>,
    protected error: Error
  ) {
    this.data = [];
    this.result = [];
  }

  @given("some data timestamp by minutes")
  public someDataTimestampByMinutesFromTo(data: TableDefinition) {
    let limits = data.hashes()[0];

    for (
      let i = Date.parse(limits.from);
      i <= Date.parse(limits.to);
      i += 60000
    ) {
      this.data.push({ timestamp: i });
    }
  }

  @given("a period from {string} to {string}")
  public aPeriodFromTo(from: string, to: string) {
    this.from = Date.parse(from);
    this.to = Date.parse(to);
  }

  @when("we try to format those data for unit of time {string}")
  public weFormatThoseDataForUnitOfTime(unitOfTime: string) {
    try {
      this.result = new FormatByUnitOfTime().handle();
    } catch (e) {
      this.error = e;
    }
  }

  @then("we should get {string} list of entries")
  public weShouldGetListsAsResult(nbList: string) {
    assert.strictEqual(
      this.result.length,
      +nbList,
      `There should be ${+nbList} list`
    );
  }

  @then("we should get {string} in each list")
  public weShouldGetEntriesInEachList(nbEntries: string) {
    this.result.forEach((list) => {
      assert.strictEqual(
        list.length,
        +nbEntries,
        `There should be ${+nbEntries} in each list`
      );
    });
  }

  @then("an alert for {string} should be thrown")
  public anAlertForShouldBeThrown(alertType: string) {
    switch (alertType) {
      case "unknow unit of time":
        assert.equal(this.error instanceof UnknownUnitOfTime, true);
        break;

      case "high limit invalid":
        assert.equal(this.error instanceof HighLimitOverflow, true);
        break;

      case "low limit invalid":
        assert.equal(this.error instanceof LowLimitOverflow, true);
        break;

      default:
        throw "Should throw an exception";
    }
  }
}
