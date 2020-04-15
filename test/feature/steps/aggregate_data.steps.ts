import { given, then, when, binding } from "cucumber-tsflow";
import { TableDefinition } from "cucumber";
import assert from "assert";
import CandleRepository from "../../../src/domain/repositories/CandleRepository";
import VolumeRepository from "../../../src/domain/repositories/VolumeRepository";
import Candle from "../../../src/domain/models/Candle";
import Volume from "../../../src/domain/models/Volume";
import InMemoryCandleRepository from "../../../src/adapter/InMemoryCandleRepository";
import InMemoryVolumeRepository from "../../../src/adapter/InMemoryVolumeRepository";
import AggregateCandles from "../../../src/usecase/AggregateCandles";
import AggregateVolumes from "../../../src/usecase/AggregateVolumes";

@binding([InMemoryCandleRepository, InMemoryVolumeRepository])
export class FormatDataSteps {
  protected candles: Array<Candle>;
  protected volumes: Array<Volume>;
  protected candle: Candle | undefined;
  protected volume: Volume | undefined;

  constructor(
    protected candleRepository: CandleRepository,
    protected volumeRepository: VolumeRepository
  ) {
    this.candles = [];
    this.volumes = [];
    this.candle = undefined;
    this.volume = undefined;
  }

  @given("some candles")
  public someOchlCandlesData(candles: TableDefinition) {
    candles.hashes().forEach((candle: { [x: string]: string }) => {
      this.candleRepository.add(
        new Candle(
          candle.id,
          +candle.open,
          +candle.close,
          +candle.low,
          +candle.high
        )
      );
    }, this);
  }

  @given("some volumes")
  public someVolumes(volumes: TableDefinition) {
    volumes.hashes().forEach((volume: { [x: string]: string }) => {
      this.volumeRepository.add(new Volume(volume.id, +volume.amount));
    }, this);
  }

  @given("some OCHL candle's list id: {string}")
  public someOchlCandlesList(list: string) {
    this.candles = list
      .split(",")
      .map((id: string) => this.candleRepository.find(id.trim()), this);
  }

  @given("some volume's list id: {string}")
  public someVolumesListId(list: string) {
    this.volumes = list
      .split(",")
      .map((id: string) => this.volumeRepository.find(id.trim()), this);
  }

  @when("we aggregate those candles")
  public weAggregateThoseCandles() {
    this.candle = new AggregateCandles(this.candles).handle();
  }

  @when("we aggregate those volumes")
  public weAggregateThoseVolumes() {
    this.volume = new AggregateVolumes(this.volumes).handle();
  }

  @then("the resulting candle should be {string}")
  public theResultingCandleShouldBe(id: string) {
    let expectedCandle = this.candleRepository.find(id);
    //TODO: need to improve check on candles
    assert.equal(this.candle, expectedCandle);
  }

  @then("the resulting volume should be {string}")
  public theResultingVolumeShouldBe(id: string) {
    assert.equal(
      this.volume!.getAmount(),
      this.volumeRepository.find(id).getAmount()
    );
  }
}
