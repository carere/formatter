import CandleRepository from "../../src/domain/repositories/CandleRepository";
import InMemoryCandleRepository from "../../src/adapter/InMemoryCandleRepository";

describe("Aggregate Candles", function () {
  it("should aggregate candles", function () {
    let candleRepository: CandleRepository = new InMemoryCandleRepository();

    // Implement context for test
    // Call use case
    // Assert result is expected
  });
});
