describe('Board', function () {
  beforeEach(function () {
    COLS = 6;
    ROWS = 5;
    MAKE_ALIVE_RULES = [3];
    KEEP_ALIVE_RULES = [2,3];
    board = new Board(ROWS, COLS, KEEP_ALIVE_RULES, MAKE_ALIVE_RULES);
  });

  it('should require both parameteres', function () {
    expect(function() {
      board = new Board(2,1,[3]);
    }).toThrow("Wrong number of parameters (4 required)");
  });

  it('should initialize with 5 rows', function () {
    expect(board.rows()).toEqual(5);
  });

  it('should initialize with 6 columns', function () {
    expect(board.cols()).toEqual(6);
  });

  describe('cells', function(){
    it('should have 30 cells', function () {
      expect(board.cells().length).toEqual(30);
    });
  });

  describe('cell', function() {
    it('should return proper cell', function() {
      var cells = board.cells();
      expect(cells[0] === board.cell(0,0)).toBeTruthy();
      expect(cells[5] === board.cell(0,5)).toBeTruthy();
      expect(cells[6] === board.cell(1,0)).toBeTruthy();
      expect(cells[7] === board.cell(1,1)).toBeTruthy();
      expect(cells[29] === board.cell(4,5)).toBeTruthy();
      expect(cells[9] === board.cell(1,3)).toBeTruthy();
      expect(cells[9] === board.cell(1,4)).not.toBeTruthy();
    });
  });

  describe('nextTurn', function() {
    it('should run loop 30 times', function() {
      var nextStateSpy = spyOn(board, 'nextState');
      board.nextTurn();
      expect(nextStateSpy.callCount).toEqual(30);
    });
  });

  describe('neighbours', function() {
    it('should return proper value', function() {
      expect(board.neighbours(7)).toEqual(0);
      spyOn(board.cell(0,0), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(1);
      spyOn(board.cell(0,1), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(2);
      spyOn(board.cell(0,2), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(3);
      spyOn(board.cell(1,0), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(4);
      spyOn(board.cell(1,2), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(5);
      spyOn(board.cell(2,0), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(6);
      spyOn(board.cell(2,1), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(7);
      spyOn(board.cell(2,2), 'isAlive').andReturn(true);
      expect(board.neighbours(7)).toEqual(8);
    });
  });

  describe("clone", function() {
    it("should copy board with cells and rules", function() {
      newBoard = board.clone();
      expect(newBoard.rows()).toEqual(board.rows());
      expect(newBoard.cols()).toEqual(board.cols());
      expect(newBoard.keepAliveRules()).toEqual(board.keepAliveRules());
      expect(newBoard.makeAliveRules()).toEqual(board.makeAliveRules());
      for(i=0;i<newBoard.cells().length;i++) {
        expect(newBoard.cells()[i].isAlive()).toEqual(board.cells()[i].isAlive());
      }
    });
  });

});
