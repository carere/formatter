import CandleRepository from "../../src/domain/repositories/CandleRepository";
import InMemoryCandleRepository from "../../src/adapter/InMemoryCandleRepository";
import Candle from "../../src/domain/models/Candle";
import AggregateCandles from "../../src/usecase/AggregateCandles";

let candleRepository: CandleRepository = new InMemoryCandleRepository();

[
  new Candle("abc", 10, 1, 10, 1),
  new Candle("def", 20, 16, 34, 6),
  new Candle("ghi", 30, 25, 100, 5),
  new Candle("jkl", 40, 70, 99, 20),
  new Candle("mno", 53, 80, 125, 15),
  new Candle("pqr", 10, 70, 100, 1),
  new Candle("stu", 20, 25, 125, 5),
].map((c: Candle) => candleRepository.add(c));

describe("Aggregate Candles", function () {
  it("should aggregate candles [abc, ghi, jkl] and get 'pqr'", function () {
    assertThatAggregatedCandlesAreEqualsToResultingCandle(
      ["abc", "ghi", "jkl"],
      "pqr"
    );
  });

  it("should aggregate candles [def, mno, ghi] and get 'stu'", function () {
    assertThatAggregatedCandlesAreEqualsToResultingCandle(
      ["def", "mno", "ghi"],
      "stu"
    );
  });
});

function assertThatAggregatedCandlesAreEqualsToResultingCandle(
  list: Array<string>,
  expected: string
) {
  assertThatCandleAreEquals(
    aggregateCandles(fetchCandles(list)),
    candleRepository.find(expected)
  );
}

function assertThatCandleAreEquals(
  actualCandle: Candle,
  expectedCandle: Candle
) {
  expect(actualCandle.getOpen()).toStrictEqual(expectedCandle.getOpen());
  expect(actualCandle.getClose()).toStrictEqual(expectedCandle.getClose());
  expect(actualCandle.getHigh()).toStrictEqual(expectedCandle.getHigh());
  expect(actualCandle.getLow()).toStrictEqual(expectedCandle.getLow());
}

function aggregateCandles(candles: Candle[]) {
  return new AggregateCandles(candles).handle();
}

function fetchCandles(ids: Array<string>) {
  return ids.map((id: string) => candleRepository.find(id));
}
