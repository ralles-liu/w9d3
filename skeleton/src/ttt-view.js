class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $grid = $("<ul></ul>");
    // three li, each one having 3 things in them 
    // let $inner = $("<li></li>");
    // $inner.addClass("rows")
    // let $very_inner = $("<li></li>");
    // $inner.append($very_inner);
    // $inner.append($very_inner);
    // $inner.append($very_inner);
    // $grid.append($("<li></li>"));
    // $grid.append($("<li></li>"));
    // $grid.append($("<li></li>"));
    
    for (let i = 0; i < 3; i++) {
      let $row =  $("<li></li>");
      $row.addClass("rows");
      for (let i = 0; i < 3; i++) {
        let $col = $("<li></li>");
        $row.append($col);
      }
      $grid.append($row);
    }

    return $grid;
  }
}

module.exports = View;
