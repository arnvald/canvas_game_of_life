function Cell() {
  var isAlive = false;

  this.makeAlive = function() { isAlive = true; };
  this.makeDead = function() { isAlive = false; };

  this.switchState = function() {
    if(isAlive === true) { this.makeDead(); }
    else { this.makeAlive();}
  };

  this.isAlive = function() { return isAlive;};
  this.isDead = function() { return !isAlive;};

  this.clone = function() {
    var clone = new Cell();
    if(this.isAlive()) { clone.makeAlive(); }
    return clone;
 };
}
