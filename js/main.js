/*----- constants -----*/


/*----- app's state (variables) -----*/
var player;
var board;
var turn;
var winner;

/*----- cached element references -----*/
var $cells = $('td');

/*----- event listeners -----*/
$('#play').on('click', function() {
    init();
    render();
})
$('.btns').on('click', function(evt) {
    var colIdx = parseInt(evt.target.id),
        rowIdx = board[colIdx].indexOf(0)
    board[colIdx][rowIdx] = turn
    turn = turn * -1
    if (winner) return 
    winner = getWinner(colIdx, rowIdx)
    // console.log(`winner is ${winner}`)
    render()
})

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
    ]
    turn = 1
    winner = null
}

function render () {
    var color = {
         "-1": 'red',
         "0": 'white',
         "1": 'black' 
    };
    // player's message
    if (turn === 1) {
        $('#message').html("Player 1's Turn")
    } else {
        $('#message').html("Player 2's Turn")
    }
    //winning message
    if (winner === 1) {
        $('#message').html("Player 1 Wins!")
    } else if (winner === -1) {
        $('#message').html("Player 2 Wins!")
    }
    $cells.each(function() {
        var $cell = $(this); 
        var colIdx = $cell.attr('data-col');
        var rowIdx = $cell.attr('data-row');
        $cell.css('background-color', color[board[colIdx][rowIdx]]);
    });
    // TODO: disable column buttons when full
}

function getWinner(colIdx, rowIdx) {
    if (winner) return;
    for (var colIdx = 0; colIdx < 6; colIdx++) {
        for (var rowIdx = 0; rowIdx < 5; rowIdx++ ) {
            if (checkRight) {

        } 
            winner = checkRight(colIdx, rowIdx) || checkUp(colIdx, rowIdx) || checkDiagUp(colIdx, rowIdx) || checkDiagDown(colIdx, rowIdx)
            if (winner) return winner
        }
    }
    return null
}

// Check VERTICAL right
function checkRight(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx][colIdx + 1] + board[rowIdx][colIdx + 2] + board[rowIdx][colIdx + 3]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}

// Check UP a column
function checkUp(colIdx, rowIdx) {
    if (rowIdx > 3) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx + 1][colIdx] + board[rowIdx+2][colIdx] + board[rowIdx + 3][colIdx]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}

// Going RIGHT and UP
function checkDiagDown (colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx < 3) return null;    
    var sum = Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]);
    return (sum === 4) ? board[colIdx][rowIdx] : null;
}

// Going RIGHT and DOWN
function checkDiagUp(colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx > 2) return null;   
    var sum = Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]);
    return (sum === 4) ? board[colIdx][rowIdx] : null;
}

init();
render();

/*END*/

// function checkRow() {
//     for (var y = 0; y <=)
// }
    //Coordinates need to come in as a parameter
    //Player needs to come in as a parameter

    //Tests so we can see what is happening
    //checkPlayer = -1;
    //x = 5;
    //y = 4;

/* possible winning logic for checkHozWin 
    var sum = 0;

    while (x!=0 && board[x][y] == checkPlayer)
    {
        x--;
        console.log("Hello");
    }

    x++;
    if(x>3) x=3;

    for(var i = 0; i<4; i++)
    {
        sum += board[x][y];
        x++;
    }

    if(sum == 4*checkPlayer) console.log("WINNER!!!");
*/

