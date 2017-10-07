// ------------------
/*----- constants -----*/
$(document).ready(function() {


/*----- app's state (variables) -----*/
var turn;
var winner;
/*----- cached element references -----*/
var $cell = $('td');

var board = [ 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]


/*----- event listeners -----*/


/*----- functions -----*/
function render () {
    var color = {
        "-1": "URL",
        "0": "URL",
        "1": "URL",
    }
    ///// // how do we basically insert the ID of the td into the array and replace that with our indicated player's value (1 or -1)
}
// $('td').each(function(index){
    var row = getRow(index);
    var col = getCol(index);
    // $(this).css('background-color', color[0]);
    $(this).css('background-color', color[board[row][col]]);
});
}

$('.board').on('click','td.cell', (function() {
    var idx = this.id
}));


//
});

// Skeleton??


// GameBoard
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
