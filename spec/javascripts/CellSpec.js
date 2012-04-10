describe('Cell', function () {
  beforeEach(function () {
    cell = new Cell();    
  });

  it('should have empty state', function () {
    expect(cell.state()).toEqual('empty');
  });

  describe('makeAlive', function() {
    it('should make cell alive', function () {
      cell.makeEmpty();
      cell.makeAlive();
      expect(cell.state()).toEqual('alive');
      cell.makeDead();
      cell.makeAlive();
      expect(cell.state()).toEqual('alive');
      cell.makeAlive();
      cell.makeAlive();
      expect(cell.state()).toEqual('alive');
    });
  });

  describe('makeDead', function() {
    it('should make cell dead', function () {
      cell = new Cell();
      cell.makeDead();
      expect(cell.state()).toEqual('dead');
      cell.makeDead();
      expect(cell.state()).toEqual('dead');
      cell.makeAlive();
      cell.makeDead();
      expect(cell.state()).toEqual('dead');
    });
  });

  describe('makeEmpty', function() {
    it('should make cell empty', function () {
      cell.makeEmpty();
      expect(cell.state()).toEqual('empty');
      cell.makeDead();
      cell.makeEmpty();
      expect(cell.state()).toEqual('empty');
      cell.makeAlive();
      cell.makeEmpty();
      expect(cell.state()).toEqual('empty');
    });
  });

  describe('aliveOrDelete', function() {
    it('should make empty cell alive', function() {
      cell.aliveOrDelete();
      expect(cell.state()).toEqual('alive');
    });

    it('should make dead cell alive', function() {
      cell.makeDead();
      cell.aliveOrDelete();
      expect(cell.state()).toEqual('alive');
    });

    it('should make alive cell dead', function() {
      cell.makeAlive();
      cell.aliveOrDelete();
      expect(cell.state()).toEqual('dead');
    });
  });

  describe('isAlive', function() {
    it('should return true if is alive', function() {
      cell.state= "alive";
      expect(cell.isAlive()).toBeTruthy;
    });

    it('should return false if is not alive', function() {
      cell.state= "empty";
      expect(cell.isAlive()).toBeFalsy;
      cell.state= "dead";
      expect(cell.isAlive()).toBeFalsy;
    });
  });

  describe('isEmpty', function() {
    it('should return true if is empty', function() {
      cell.state= "empty";
      expect(cell.isEmpty()).toBeTruthy;
    });

    it('should return false if is not empty', function() {
      cell.state= "alive";
      expect(cell.isEmpty()).toBeFalsy;
      cell.state= "dead";
      expect(cell.isEmpty()).toBeFalsy;
    });
  });

  describe('isDead', function() {
    it('should return true if is dead', function() {
      cell.state= "dead";
      expect(cell.isDead()).toBeTruthy;
    });

    it('should return false if is not alive', function() {
      cell.state= "empty";
      expect(cell.isDead()).toBeFalsy;
      cell.state= "alive";
      expect(cell.isDead()).toBeFalsy;
    });
  });

  describe('getState', function() {
    it('should return its state', function(){
      cell.makeDead();
      expect(cell.state()).toEqual("dead");
      cell.makeAlive();
      expect(cell.state()).toEqual("alive");
      cell.makeEmpty();
      expect(cell.state()).toEqual("empty");
    });
  });
});
