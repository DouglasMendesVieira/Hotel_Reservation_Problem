(function () {
  const it = require("./test").it;
  const toBe = require("./test").toBe;

  const createUser = require("../src/controllers/userController").newUser;
  const User = require("../src/models/User").User;
  const CATEGORIES = require("../src/configs/user.config");

  it("Cria um usuário", () => {
    const mockDailies = ["16Mar2009(mon)"];
    const mockDate = [{ dayDate: new Date("03 16, 2009"), weekDay: true }];

    const mockUser = new User(CATEGORIES.REWARD, mockDate);
    const resultFn = createUser("Rewards", mockDailies);

    toBe(JSON.stringify(mockUser) === JSON.stringify(resultFn));
  });
})();
