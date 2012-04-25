$(document).ready(function() {
  init();
  function init() {
    var speed = $('#speed').val();
    var step = $('#step').val();
    var cols = 47;
    var rows = 22;
    var makeAliveRules = $('#make_alive_rules').val().split(",");
    var keepAliveRules = $('#keep_alive_rules').val().split(",");
    canvas = document.getElementById('game_canvas');
    gameOfLife = new GameOfLife(canvas, cols, rows, keepAliveRules, makeAliveRules, speed);
    gameOfLife.refresh();
  }

  $('#run').on('click', function() {
    gameOfLife.run();
    $(this).addClass('hidden');
    $('#one_step').addClass('hidden');
    $('#stop').removeClass('hidden');
  });

  $('#stop').on('click', function() {
    gameOfLife.stop();
    $(this).addClass('hidden');
    $('#one_step').removeClass('hidden');
    $('#run').removeClass('hidden');
  });

  $('#one_step').on('click', function() {
    gameOfLife.refresh();
  });

  $('#clear').on('click', function() {
    init();
    $('#generation').html("0");
    gameOfLife.refresh();
  });

  $('#game_canvas').on('click', function(e) {
    canvas = document.getElementById('game_canvas');
    cellCol = Math.floor((e.pageX - canvas.offsetLeft)/gameOfLife.size);
    cellRow = Math.floor((e.pageY - canvas.offsetTop)/gameOfLife.size);
    gameOfLife.switchCell(cellRow, cellCol);
  });

});
