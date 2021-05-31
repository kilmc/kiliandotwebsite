const lists = require("../_data/old_lists");

describe("lists", () => {
  it("renders the right stuff", () => {
    expect(lists()).toEqual({
      annual: [
        [2020, {}, {}],
        [2019, {}, {}],
      ],
      running: {
        "Favourite iOS games": [],
        "Favourite films": [],
      },
    });
  });
});
