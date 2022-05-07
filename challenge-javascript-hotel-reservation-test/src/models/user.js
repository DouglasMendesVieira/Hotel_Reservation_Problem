const Daily = require("./daily");
const CATEGORIES = require("../configs/user.config");

class User {
  constructor(type = CATEGORIES.REGULAR, days) {
    // Cria a instancia de um usuário [Pega a categoria do cliente (se ele é regular ou reward), e os dados das diárias desse cliente]
    this._type = type;
    this._daily = days.map(
      (d) =>
        new Daily(
          d.dayDate.getDate(),
          d.dayDate.getMonth(),
          d.dayDate.getFullYear(),
          d.weekDay
        )
    );
  }

  getType() {
    return this._type;
  }

  getDaily() {
    return this._daily;
  }
}

module.exports = {
  User,
  CATEGORIES,
};
