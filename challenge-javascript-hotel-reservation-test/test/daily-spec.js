(function () {
  const it = require("./test").it;
  const toBe = require("./test").toBe;

  const discoverMonth =
    require("../src/controllers/dailyController").checkMonth;
  const createDailyDt =
    require("../src/controllers/dailyController").newDailyData;

  it("Cria uma diária do cliente", () => {
    const mockDaily = "16Mar2009(mon)";
    const mockDailyDate = new Date("03 16, 2009");

    const expected = {
      dayDate: mockDailyDate,
      weekDay: true,
    };

    toBe(JSON.stringify(createDailyDt(mockDaily)) === JSON.stringify(expected));
  });
})();
