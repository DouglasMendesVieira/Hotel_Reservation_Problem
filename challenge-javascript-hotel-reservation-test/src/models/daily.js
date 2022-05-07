class Daily {
    constructor(dayNumber, month, year, weekDay) {
      this._day = dayNumber; //Dia da semana da diária
      this._month = month; //Mês da diária
      this._year = year; //Ano da diária
      this._weekDay = weekDay; //Variável para identificar se a diária é um dia da semana ou um final de semana
    }
  
    getDay() {
      return this._day;
    }
  
    getMonth() {
      return this._month;
    }
  
    getYear() {
      return this._year;
    }
  
    getWeekDay() {
      return this._weekDay;
    }
  }
  
  module.exports = Daily;
  