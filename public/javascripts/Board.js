function Board(_rows, _cols, _keepAliveRules, _makeAliveRules) {

  if(_rows == undefined || _cols == undefined ||
      _keepAliveRules == undefined || _makeAliveRules == undefined) {
    throw("Wrong number of parameters (4 required)");
  }

  var rows = _rows;
  var cols = _cols;
  var keepAliveRules = _keepAliveRules;
  var makeAliveRules = _makeAliveRules;
  var cells = createCells();

  this.setCells = function(_cells) { cells = _cells;};

  function createCells() {
    cells = [];
    for(i = 0; i<rows*cols; i++) {
      cells[i] = new Cell();
    }
    return cells;
  }

  this.rows = function() { return rows; };
  this.cols = function() { return cols; };
  this.makeAliveRules = function() { return makeAliveRules; };
  this.keepAliveRules = function() { return keepAliveRules; };
  this.cells = function() { return cells; };

  this.cell = function(row, col) {
    if(row < 0 || row >= rows || col < 0 || col >= cols) { return null; }
    return cells[(row*cols)+col];
  };

  this.nextTurn = function() {
    var oldBoard = this.clone();
    for(i = 0; i < rows*cols; i++) {
      neighbours = oldBoard.neighbours(i);
      this.nextState(i, neighbours);
    }
  };

  this.nextState = function(cellId, neighbours) {
    var cell = cells[cellId];
    if(makeAliveRules.indexOf(neighbours) > -1) {
      cell.makeAlive();
      return;
    }
    if(keepAliveRules.indexOf(neighbours) > -1) { return; }
    cell.makeDead();
  };

  this.neighbours = function(cellId) {
    var neighbours = 0;
    var row = Math.floor(cellId / cols);
    var col = cellId % cols;
    if (this.cell(row-1, col-1) && this.cell(row-1,col-1).isAlive()) { neighbours += 1;}
    if (this.cell(row-1, col) && this.cell(row-1,col).isAlive()) { neighbours += 1;}
    if (this.cell(row-1, col+1) && this.cell(row-1,col+1).isAlive()) { neighbours += 1;}
    if (this.cell(row, col-1) && this.cell(row,col-1).isAlive()) { neighbours += 1;}
    if (this.cell(row, col+1) && this.cell(row,col+1).isAlive()) { neighbours += 1;}
    if (this.cell(row+1, col-1) && this.cell(row+1,col-1).isAlive()) { neighbours += 1;}
    if (this.cell(row+1, col) && this.cell(row+1,col).isAlive()) { neighbours += 1;}
    if (this.cell(row+1, col+1) && this.cell(row+1,col+1).isAlive()) { neighbours += 1;}
    return neighbours;
  };

  this.clone = function() {
    var newBoard = new Board(rows, cols, keepAliveRules, makeAliveRules);
    var newCells = [];
    for(var i=0;i<cells.length;i++) {
      newCells.push(cells[i].clone());
    }
    newBoard.setCells(newCells);
    return newBoard;
  };
}
