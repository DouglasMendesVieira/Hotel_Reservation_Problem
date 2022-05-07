const Hotel = require("../models/hotel");
const Rate = require("../models/rate");

// Cria a instância de um hotel de acordo com a configuração do parâmetro
const newHotel = (config) => {
  const { name, stars } = config;
  const { weekRate, weekRateReward, weekendRate, weekendRateReward } = config;
  const hotelWeekRate = new Rate(weekRate, weekRateReward);
  const hotelWeekendRate = new Rate(weekendRate, weekendRateReward);

  return new Hotel(name, stars, hotelWeekRate, hotelWeekendRate);
};

module.exports = { newHotel };
