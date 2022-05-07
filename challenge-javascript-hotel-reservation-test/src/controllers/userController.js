const dailyController = require("./dailyController");
const userTypes = require("../models/user").CATEGORIES;
const User = require("../models/user").User;

// Verifica a categoria do cliente dos hoteis de acordo com o arquivo de entrada (exemplo.txt)
const checkCategory = (category) => {
  if (category === userTypes.REGULAR.toLowerCase()) return userTypes.REGULAR;
  else if (category === userTypes.REWARD.toLowerCase()) return userTypes.REWARD;
  else throw new Error("There is no such category of customers!");
};

// Cria a instância de um usuário com sua categoria (Regular ou Reward) e suas diáriass
const newUser = (userCategory, daysInHotel) => {
  const userType = checkCategory(userCategory.toLowerCase());
  const days = daysInHotel.map((day) => dailyController.newDailyData(day));
  return new User(userType, days);
};

module.exports = { newUser, checkCategory };
