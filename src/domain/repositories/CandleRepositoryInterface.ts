import Candle from "../models/Candle";

export default interface CandleRepositoryInterface {
  add(candle: Candle): void;
}
