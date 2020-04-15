import CandleRepository from "../domain/repositories/CandleRepository";
import Candle from "../domain/models/Candle";

export default class implements CandleRepository {
  protected candles: Array<Candle>;

  constructor() {
    this.candles = [];
  }

  find(id: string): Candle {
    let candle = this.candles.find((c: Candle) => c.getId() == id, this);

    if (candle === undefined)
      throw new Error(`Cannot find Candle with id: '${id}'`);

    return candle;
  }

  add(candle: Candle): void {
    this.candles.push(candle);
  }
}
