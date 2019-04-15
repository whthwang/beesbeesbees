var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow'
  this.canFly = true;
  this.treasureChest = [];


};

ForagerBee.prototype = new Bee();
ForagerBee.prototype.forage = function () {
  this.treasureChest.push('treasure');
}
ForagerBee.prototype.constructor = ForagerBee;