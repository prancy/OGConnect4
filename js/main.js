/*----- constants -----*/


/*----- app's state (variables) -----*/
var player;
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

function render () {
    var color = {
         "-1": 'red',
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

function getWinner(colIdx, rowIdx) {
    // return 1 or -1 if player wins, or if tie
    var w = (checkHorzWin(colIdx, rowIdx) || checkVertWin(colIdx, rowIdx) || checkDiagUp(colIdx, rowIdx) || checkDiagDown(colIdx, rowIdx)); // etc., etc.
    if (winner) return 
    // return 'T' if no more squares remain (tie)
    return null;
}
// Winning Logic
// rowIdx = y
// colIdx = x
function checkHorzWin(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx][colIdx + 1] + board[rowIdx][colIdx + 2] + board[rowIdx][colIdx + 3]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}
function checkVertWin(colIdx, rowIdx) {
    if (rowIdx > 2) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx + 1][colIdx] + board[rowIdx+2][colIdx] + board[rowIdx + 3][colIdx]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}

// // going RIGHT and UP
function checkDiagUp (colIdx, rowIdx) {
    if (rowIdx > 6, colIdx > 2) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx - 1][colIdx + 1] + board[rowIdx - 2][colIdx + 2] + board[rowIdx - 3][colIdx + 3]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}
// // going RIGHT and DOWN
function checkDiagDown (colIdx, rowIdx) {
    if (rowIdx > 2, colIdx > 2) return null;
    var sum = Math.abs(board[rowIdx][colIdx] + board[rowIdx + 1][colIdx + 1] + board[rowIdx+2][colIdx + 2] + board[rowIdx + 3][colIdx + 3]);
    return (sum === 4) ? board[rowIdx][colIdx] : null;
}
// function checkDiagDown(colIdx, rowIdx) {
//     for (var y = 0; y <= 2; y++) {
//         for (var x = 0; x <= 3; x++) {
//             if (board[rowIdx][colIdx] !=0 && board[rowIdx][colIdx] == board[rowIdx+1][colIdx+1] && board[rowIdx][colIdx] == board[rowIdx+2][colIdx+2] && board[rowIdx][colIdx] == board[rowIdx+3][colIdx+3]) {
//                 return (board[rowIdx][colIdx]);
//             }
//         }
//     }
// }
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

