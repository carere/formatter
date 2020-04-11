import { given, then, when, binding } from "cucumber-tsflow";
import { TableDefinition } from "cucumber";

@binding()
export class FormatDataSteps {
  @given("some data timestamp by minutes")
  public someDataTimestampByMinutes() {
    return "pending";
  }

  @given("a time interval from {string} to {string}")
  public aTimeIntervalFromTo(from: string, to: string) {
    return "pending";
  }

  @when("we format those data for unit of time {string}")
  public weFormatThoseDataForUnitOfTime(unitOfTime: string) {
    return "pending";
  }

  @then("we should get {string} entries as result")
  public weShouldGetEntriesAsResult(nbEntries: number) {
    return "pending";
  }

  @then("an alert for {string} should be thrown")
  public anAlertForShouldBeThrown(alertType: string) {
    return "pending";
  }
}
