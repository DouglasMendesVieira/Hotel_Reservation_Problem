const readFileContent =
  require("../src/controllers/fileController").readFileContent;
const hotelController = require("../src/controllers/hotelController");
const userController = require("../src/controllers/userController");
const hotelsConfig = require("../src/configs/hotel.config").Hotels;
const betterHotel = require("../main").betterHotelOption;

const path = "examples.txt";

//Inicializando configuração dos hotéis
const hotels = hotelsConfig.map((hotel) => hotelController.newHotel(hotel));

//Lendo conteúdo de entrada
const entries = readFileContent(path);

const users = entries.map((entry) => {
  const matchUserType = /([A-Z])\w+:/gi;
  const userType = matchUserType.exec(entry)[0].replace(/\:/, "").trim();
  let days = entry.replace(userType, "").trim().split(",");

  days = days.map((day) => day.replace(":", "").trim());

  return userController.newUser(userType, days);
});

users.map((user) => betterHotel(user, hotels));
