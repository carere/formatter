import { given, then, when, binding } from "cucumber-tsflow";
import { TableDefinition } from "cucumber";
import assert from "assert";
import CandleRepository from "../../../src/domain/repositories/CandleRepository";
import VolumeRepository from "../../../src/domain/repositories/VolumeRepository";
import Candle from "../../../src/domain/models/Candle";
import Volume from "../../../src/domain/models/Volume";
import InMemoryCandleRepository from "../../../src/adapter/InMemoryCandleRepository";
import InMemoryVolumeRepository from "../../../src/adapter/InMemoryVolumeRepository";
import AggregateCandlesUseCase from "../../../src/domain/usecases/AggregateCandlesUseCase";
import AggregateVolumesUseCase from "../../../src/domain/usecases/AggregateVolumesUseCase";

@binding([InMemoryCandleRepository, InMemoryVolumeRepository])
export class FormatDataSteps {
  protected volume: Volume | undefined;
  protected candle: Candle | undefined;

  constructor(
    protected candleRepository: CandleRepository,
    protected volumeRepository: VolumeRepository
  ) {
    this.volume = undefined;
    this.candle = undefined;
  }

  @given("some OCHL candles data")
  public someOchlCandlesData(candles: TableDefinition) {
    candles.hashes().forEach((candle: { [x: string]: string }) => {
      this.candleRepository.add(
        new Candle(+candle.open, +candle.close, +candle.low, +candle.high)
      );
    }, this);
  }

  @given("some volumes")
  public someVolumes(volumes: TableDefinition) {
    volumes.hashes().forEach((volume: { [x: string]: string }) => {
      this.volumeRepository.add(new Volume(+volume.amount));
    }, this);
  }

  @when("we aggregate those candles")
  public weAggregateThoseCandles() {
    this.candle = new AggregateCandlesUseCase().handle();
  }

  @when("we aggregate those volumes")
  public weAggregateThoseVolumes() {
    this.volume = new AggregateVolumesUseCase().handle();
  }

  @then("the resulting candle should be")
  public theResultingCandleShouldBe(result: TableDefinition) {
    let [open, close, high, low] = result.rows().flat();
    let expectedCandle: Candle = new Candle(+open, +close, +low, +high);

    assert.equal(this.candle, expectedCandle);
  }

  @then("the resulting volume should be {int}")
  public theResultingVolumeShouldBe(amount: number) {
    assert.equal(this.volume!.getAmount(), amount);
  }
}
