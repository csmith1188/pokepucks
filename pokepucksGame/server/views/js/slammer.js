class Slammer {
  constructor(name, weight, side) {
    this.name = name;
    this.weight = weight;
    this.side = side;
  }
  attack() {
    // attack
    let power
    power = Math.floor(Math.random() *100)+1 + this.weight;
    if(power>100){
      power = 100;
    }
    return power;
  }
}