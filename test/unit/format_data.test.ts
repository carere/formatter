import FormatByUnitOfTime from "../../src/usecase/FormatByUnitOfTime";

describe("Format data", function () {
  let data: Array<{ timestamp: number }> = [];

  for (
    let i = Date.parse("2018-01-01T00:00:00");
    i <= Date.parse("2018-06-01T00:00:00");
    i += 60000
  ) {
    data.push({ timestamp: i });
  }

  it("should format by unit of time H1 and get 60 entries in 24 list", function () {
    let to = Date.parse("2018-01-01T00:00:00");
    let from = Date.parse("2018-01-02T00:00:00");

    let result = new FormatByUnitOfTime().handle();

    expect(result.length).toEqual(24);

    result.forEach((list: []) => {
      expect(list.length).toEqual(60);
    });
  });
});
