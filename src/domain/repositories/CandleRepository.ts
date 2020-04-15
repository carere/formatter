import Candle from "../models/Candle";

export default interface CandleRepository {
  find(id: string): Candle;
  add(candle: Candle): void;
}
