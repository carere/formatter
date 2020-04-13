import { given, then, when, binding } from "cucumber-tsflow";
import { TableDefinition } from "cucumber";
import CandleRepositoryInterface from "../../../src/domain/repositories/CandleRepositoryInterface";
import InMemoryCandleRepository from "../../../src/adapter/InMemoryCandleRepository";
import Candle from "../../../src/domain/models/Candle";

@binding([InMemoryCandleRepository])
export class FormatDataSteps {
  constructor(protected candleRepository: CandleRepositoryInterface) {}

  @given("some OCHL candles data")
  public someOchlCandlesData(candles: TableDefinition) {
    candles
      .hashes()
      .forEach(function (
        this: FormatDataSteps,
        candle: { [x: string]: string }
      ) {
        this.candleRepository.add(
          new Candle(+candle.open, +candle.close, +candle.low, +candle.high)
        );
      },
      this);
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
