const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../../solution/game.js'); // require appropriate file

// console.log("webpack is working");

$(() => {
  const $el = $(".ttt");
  let board = new View(new Game(), $el); 

  $($el).on('click', e => {
    
    const $square = e.target; 
    View.prototype.makeMove($($square));
    // $($square).addClass('whatever');
  })
});

