import CandleRepository from "../domain/repositories/CandleRepository";
import Candle from "../domain/models/Candle";

export default class implements CandleRepository {
  protected candles: Array<Candle>;

  constructor() {
    this.candles = [];
  }

  add(candle: Candle): void {
    this.candles.push(candle);
  }
}
