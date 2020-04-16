import Candle from "../domain/models/Candle";

export default class {
  constructor(private candles: Array<Candle>) {}

  handle(): Candle {
    let candle = new Candle("aaa", 0, 0, 0, 0);

    this.candles.forEach((c, i, candles) => {
      if (i === 0) {
        candle.setOpen(c.getOpen());
      }

      if (candle.getHigh() === 0 || c.getHigh() > candle.getHigh()) {
        candle.setHigh(c.getHigh());
      }

      if (candle.getLow() === 0 || c.getLow() < candle.getLow()) {
        candle.setLow(c.getLow());
      }

      if (i === candles.length - 1) {
        candle.setClose(c.getClose());
      }
    });

    return candle;
  }
}
