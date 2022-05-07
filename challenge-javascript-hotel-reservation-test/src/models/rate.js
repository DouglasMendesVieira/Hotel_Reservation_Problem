class Rate {
    constructor(regularRate = 0.0, rewardRate = 0.0) {
      this._regularRate = regularRate; //Taxa que o hotel cobra para clientes normais (Regular)
      this._rewardRate = rewardRate; //Taxa que o hotel cobra para clientes participantes do programa de fidelidade (Reward)
    }
  
    getRegularRate() {
      return this._regularRate;
    }
  
    getRewardRate() {
      return this._rewardRate;
    }
  }
  
  module.exports = Rate;
  