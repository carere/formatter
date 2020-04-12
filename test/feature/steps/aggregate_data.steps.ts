import { given, then, when, binding } from "cucumber-tsflow";
import { TableDefinition } from "cucumber";

@binding()
export class FormatDataSteps {
  @given("some OCHL candles data")
  public someOchlCandlesData(candles: TableDefinition) {
    return "pending";
  }

  @given("some volumes")
  public someVolumes(volumes: TableDefinition) {
    return "pending";
  }

  @when("we aggregate those candles")
  public weAggregateThoseCandles() {
    return "pending";
  }

  @when("we aggregate those volumes")
  public weAggregateThoseVolumes() {
    return "pending";
  }

  @then("the resulting candle should be")
  public theResultingCandleShouldBe(candle: TableDefinition) {
    return "pending";
  }

  @then("the resulting volume should be {int}")
  public theResultingVolumeShouldBe(volume: number) {
    return "pending";
  }
}
