function Cell() {
  var state = "empty";

  this.state = function() {
    return state;
  };

  this.makeAlive = function() { state = "alive"; };
  this.makeDead = function() { state = "dead"; };
  this.makeEmpty = function() { state = "empty"; };

  this.aliveOrDelete = function() {
    if(state == "alive") { state = "dead"; }
    else { state = "alive";}
  };

  this.isAlive = function() { return (state == "alive");};
  this.isEmpty = function() { return (state == "empty");};
  this.isDead = function() { return (state == "dead");};
}
