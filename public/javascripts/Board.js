function Board(_rows, _cols, _keepAliveRules, _makeAliveRules) {

  if(_rows == undefined || _cols == undefined ||
      _keepAliveRules == undefined || _makeAliveRules == undefined) {
    throw("Wrong number of parameters (4 required)");
  }

  var rows = _rows;
  var cols = _cols;
  var keepAliveRules = _keepAliveRules;
  var makeAliveRules = _makeAliveRules;

  this.cells = createCells();

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

  this.getCell = function(row, col) {
    if(row < 0 || row >= rows || col < 0 || col >= cols) { return null; }
    return this.cells[(row*cols)+col];
  };

  this.nextTurn = function() {
    var oldBoard = this.clone();
    for(i = 0; i < rows*cols; i++) {
      neighbours = this.neighbours(i);
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
    if (this.getCell(row-1, col-1) && this.getCell(row-1,col-1).isAlive()) { neighbours += 1;}
    if (this.getCell(row-1, col) && this.getCell(row-1,col).isAlive()) { neighbours += 1;}
    if (this.getCell(row-1, col+1) && this.getCell(row-1,col+1).isAlive()) { neighbours += 1;}
    if (this.getCell(row, col-1) && this.getCell(row,col-1).isAlive()) { neighbours += 1;}
    if (this.getCell(row, col+1) && this.getCell(row,col+1).isAlive()) { neighbours += 1;}
    if (this.getCell(row+1, col-1) && this.getCell(row+1,col-1).isAlive()) { neighbours += 1;}
    if (this.getCell(row+1, col) && this.getCell(row+1,col).isAlive()) { neighbours += 1;}
    if (this.getCell(row+1, col+1) && this.getCell(row+1,col+1).isAlive()) { neighbours += 1;}
    return neighbours;
  };

  this.clone = function() {
    newBoard = new Board(rows, cols, keepAliveRules, makeAliveRules);
    newBoard.cells = this.cells.slice();
    return newBoard;
  };
}
