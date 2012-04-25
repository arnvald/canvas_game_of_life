GameOfLife = function(_canvas, _cols, _rows, _keepAliveRules, _makeAliveRules, _speed){

  var canvas = _canvas;
  var cols = _cols;
  var rows = _rows;
  var speed = parseInt(_speed, 0.1);
  var keepAliveRules = [];
  var makeAliveRules = [];
  _keepAliveRules.map(function(e){ keepAliveRules.push(parseInt(e, 0.1));});
  _makeAliveRules.map(function(e){ makeAliveRules.push(parseInt(e, 0.1));});
  this.size = 20;

  board = new Board(rows, cols, keepAliveRules, makeAliveRules);
  drawer = new Drawer(canvas);

  this.run = function() {
    this.interval = setInterval(this.refresh,Math.floor(1000/speed));
  };

  this.stop = function() {
    clearInterval(this.interval);
  };

  this.refresh = function() {
    board.nextTurn();
    drawer.draw(board);
  };

  this.switchCell = function(cellX, cellY) {
    board.cell(cellX,cellY).switchState();
    drawer.draw(board);
  };
};

Drawer = function(_canvas) {
  CELL_SIZE = 20;
  var canvas = _canvas;
  this.draw = function(board)  {
    var context = canvas.getContext('2d');
    var color = "#ffffff";

    for(i=0;i<board.rows();i++) {
      for(j=0;j<board.cols();j++) {
        if(board.cell(i,j).isAlive()) {
          color = "#000000";
        } else {
          color = "#ffffff";
        }

        context.fillStyle = color;
        context.fillRect(j*CELL_SIZE,i*CELL_SIZE,CELL_SIZE-1,CELL_SIZE-1);
      }
    }
  };
};
