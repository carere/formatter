import Candle from "../models/Candle";

export default interface CandleRepository {
  add(candle: Candle): void;
}
