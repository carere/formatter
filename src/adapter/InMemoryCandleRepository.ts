import CandleRepositoryInterface from "../domain/repositories/CandleRepositoryInterface";
import Candle from "../domain/models/Candle";

export default class implements CandleRepositoryInterface {
  protected candles: Array<Candle>;

  constructor() {
    this.candles = [];
  }

  add(candle: Candle): void {
    this.candles.push(candle);
  }
}
