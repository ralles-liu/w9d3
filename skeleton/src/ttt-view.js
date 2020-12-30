const Game = require("../../solution/game");

class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {
    // $square.addClass('whatever');
    // $square.css('background-color', 'red');
    this.game.prototype.playMove($square.data('pos'))
    $square.text
  }

  setupBoard() {
    let $grid = $("<ul></ul>");
  
    for (let i = 0; i < 3; i++) {
      let $row =  $("<li></li>");
      $row.addClass("rows");
      for (let j = 0; j < 3; j++) {
        let $col = $("<li></li>");
        $col.data('pos', [i, j])
        $row.append($col);
      }
      $grid.append($row);
    }

    return $grid;
  }
}

module.exports = View;
