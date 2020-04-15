import Candle from "../domain/models/Candle";

export default class {
  constructor(private candles: Array<Candle>) {}

  handle(): Candle {
    return new Candle("aaa", 0, 0, 0, 0);
  }
}
