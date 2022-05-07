class Hotel {
  constructor(name, classification, weekRate, weekendRate) {
    this._name = name; //Nome do hotel
    this._classification = classification; //Quantidade de estrelas que o hotel possui
    this._weekRate = weekRate; //Taxa que o hotel cobra nos dias de semanas
    this._weekendRateReward = weekendRate; //Taxa que o hotel cobra nos finais de semanas
  }

  getName() {
    return this._name;
  }

  getClassification() {
    return this._classification;
  }

  getWeekRate() {
    return this._weekRate;
  }

  getWeekendRate() {
    return this._weekendRateReward;
  }
}

module.exports = Hotel;
