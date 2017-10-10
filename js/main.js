// ------------------
$(document).ready(function() {

/*----- constants -----*/


/*----- app's state (variables) -----*/

var board;
var turn;
var winner;

/*----- cached element references -----*/
var $cells = $('td');

/*----- event listeners -----*/

$('button').on('click', function() {
    var colIdx = parseInt(this.id);
    var colArr = board[colIdx];
    var rowIdx = board[colIdx].indexOf(0)
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    turn *= -1;
    render();
});

/*----- functions -----*/

function init() {
    board = [ 
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    turn = 1;
    winner = null;
}

init();
render();

function render () {
    var color = {
         "-1": 'pink',
         "0": 'white',
         "1": 'black' 
    };

    $cells.each(function() {
        var $cell = $(this); 
        var colIdx = $cell.attr('data-col');
        var rowIdx = $cell.attr('data-row');
        $cell.css('background-color', color[board[colIdx][rowIdx]]);
    });

    // TODO: disable column buttons when full

}



});
// Have a board of 7 x 6 (w x h) - 42 total spaces
// switch between a player's turn when each player makes a move (display each player's turn)

// Dropping Chip Action
// On each player's turn, have chip appear and be able to hover over column
// hovering over the column allows it to highlight the column
// if hovering on or over column, any click will drop the chip in the lowest available spot
// available spot meaning that it is not already occupied with a chip, but force to stack on top of another one


// a person wins by connecting four chips in any direction(diagonal, left, right, top, bottom)

// Winning Game Logic
// Have an array of basically 42 possible spaces, starting from 00 to 41
// Only start scanning for possible wins after total of >=8 turns, bc you need atleast four chips from ONE player to connect
// Possible combinations of winning are... well, infinite (insert number here)
// check vertical for column for winner
// check for horizontal set value for winner
// check for only three directions

//jim's notes

// do a for loop
// until winner found in a given column
//iterate over each piece until winner 
// check vertical winner / check Vert(colidx, diskidx);

// board = []

// BONUS //

// Reset Button for Game
// Make a reset button that ....actually resets?

// Bonus
// After player's win, make OG display that shows which player won
// --------------

// only want to check for 
// var 

// function (init) {}
