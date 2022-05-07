const months = require("../utils/months").Months;

//Verifica o mês pela abreviação do nome, e retorna o nome completo
const checkMonth = (monthAbbreviation) => {
  return months.filter((m) => m.month.includes(monthAbbreviation))[0].month;
};

//Cria a instância de uma diária, separando os dados de acordo com o arquivo de entrada
const newDailyData = (daily) => {
  //A diária não formatada, assim como no arquivo de entrada
  const rxpPatterns = {
    dayRxp: new RegExp(/\d{2}/gy),
    monthRxp: new RegExp(/[A-Za-z]+/g),
    yearRxp: new RegExp(/\d{4}/g),
    weekDayRxp: new RegExp(/\((.*?)\)/g),
  };

  let dayResult = rxpPatterns.dayRxp.exec(daily)[0];
  let montnResult = rxpPatterns.monthRxp.exec(daily)[0];
  let yearResult = rxpPatterns.yearRxp.exec(daily)[0];

  const dayDate = new Date(
    `${checkMonth(montnResult)} ${Number.parseInt(
      dayResult
    )}, ${Number.parseInt(yearResult)}`
  );
  const weekDay = dayDate.getDay() == 6 || dayDate.getDay() == 0 ? false : true;
  // Verifica se a diaria está em um dia de semana ou em um final de semana

  return { dayDate, weekDay };
  // Retorna a instância da diária no formato de uma data e também em qual dia da semana ela se encontra
};

module.exports = {
  newDailyData,
  checkMonth,
};
