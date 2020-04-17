import FormatByUnitOfTime from "../../src/usecase/FormatByUnitOfTime";

describe("Format data", function () {
  it("should format by unit of time H1 and get 240 entries", function () {
    let from = Date.parse("2020-01-01T00:00:00");
    let to = Date.parse("2020-01-10T00:00:00");
    let data: Array<{ timestamp: number }> = [];

    for (let i = from; i <= to; i += 60000) {
      data.push({ timestamp: i });
    }

    let result = new FormatByUnitOfTime(data, "H1").handle();

    expect(result.length).toEqual(240);
  });
});
