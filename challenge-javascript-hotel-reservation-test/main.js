const CATEGORIES = require("./src/configs/user.config");

const betterHotelOption = (user, hotels) => {
  const userType = user.getType();
  const dailies = user.getDaily();
  var hotelPrices = [];

  hotels.forEach((hotel) => {
    var rateSum = 0.0;

    dailies.forEach((daily) => {
      if (userType === CATEGORIES.REGULAR) {
        rateSum += daily.getWeekDay()
          ? hotel.getWeekRate().getRegularRate()
          : hotel.getWeekendRate().getRegularRate();
      } else if (userType === CATEGORIES.REWARD) {
        rateSum += daily.getWeekDay()
          ? hotel.getWeekRate().getRewardRate()
          : hotel.getWeekendRate().getRewardRate();
      }
    });
    hotelPrices.push({ hotel, rateSum });
  });

  return getCheapestHotel(hotelPrices);
};

function getCheapestHotel(input) {
  //DO NOT change the function's name.
  const betterHotel = input.reduce((previous, current) =>
    previous.rateSum < current.rateSum ? previous : current
  );

  console.log("\x1b[35m%s\x1b[0m", "\n*** Hotel disponível mais barato! ***");
  console.log(betterHotel.hotel.getName());

  return betterHotel.hotel.getName();
}

module.exports = { betterHotelOption, getCheapestHotel };
