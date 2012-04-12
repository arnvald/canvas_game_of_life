describe('Cell', function () {
  beforeEach(function () {
    cell = new Cell();    
  });

  describe('makeAlive', function() {
    it('should make cell alive', function () {
      cell.makeDead();
      cell.makeAlive();
      expect(cell.isAlive()).toBeTruthy();
      cell.makeAlive();
      cell.makeAlive();
      expect(cell.isAlive()).toBeTruthy();
    });
  });

  describe('makeDead', function() {
    it('should make cell dead', function () {
      cell = new Cell();
      expect(cell.isAlive()).toBeFalsy();
      cell.makeAlive();
      cell.makeDead();
      expect(cell.isAlive()).toBeFalsy();
    });
  });

  describe('aliveOrDelete', function() {
    it('should make dead cell alive', function() {
      cell.switchState();
      expect(cell.isAlive()).toBeTruthy();
    });

    it('should make alive cell dead', function() {
      cell.makeAlive();
      cell.switchState();
      expect(cell.isAlive()).toBeFalsy();
    });
  });

  describe('isAlive', function() {
    it('should return true if is alive', function() {
      cell.state= "alive";
      expect(cell.isAlive()).toBeTruthy;
    });

    it('should return false if is not alive', function() {
      cell.state= "dead";
      expect(cell.isAlive()).toBeFalsy;
    });
  });

  describe('isDead', function() {
    it('should return true if is dead', function() {
      cell.state= "dead";
      expect(cell.isDead()).toBeTruthy;
    });

    it('should return false if is not alive', function() {
      cell.state= "alive";
      expect(cell.isDead()).toBeFalsy;
    });
  });
});
