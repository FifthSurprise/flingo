$(document).ready(function() {

    //create the bingo board
    board = new Array(5);
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(5);
    }

    var wordList = shuffle(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
        "twenty-one", "twenty-two", "twenty-three", "twenty-four"
    ]);

    //Iterate through the wordlist to load the board
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[0].length; col++) {
            //exception for the center square
            if (row == 2 && col == 2) {
                board[row][col] = createCell("FREE");
                board[row][col].status = true;
            } else {
                board[row][col] = createCell(wordList.pop());
            }
        }
    }
    //register events for listeners
});

function checkWin(board) {
    for (var i = 0; i < board.length; i++) {
        //Check rows
        if (checkVal([board[i][0].status, board[i][1].status, board[i][2].status, board[i][3].status, board[i][4].status])) {
            return true;
        }
        //Check column
        if (checkVal([board[0][i].status, board[1][i].status, board[2][i].status, board[3][i].status, board[4][i].status])) {
            return true;
        }
    }
    if (checkDiag(board)) {
        return true;
    }
    return false;
}

function checkDiag(board) {
    var forward = [];
    var backward = [];
    for (var row = 0; row < board.length; row++) {
        forward.push(board[row][row].status);
        backward.push(board[row][board.length - row - 1].status);
    }
    return checkVal(forward) || checkVal(backward);
}

function checkVal(values) {
    for (var i in values) {
        if (values[i] === false)
            return false;
    }
    return true;
}

function createCell(newtext) {
    return {
        text: newtext,
        status: false
    };
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/*
testing data:
board[0][1].status = true;
board[1][1].status = true;
board[2][1].status = true;
board[3][1].status = true;
board[4][1].status = true;


board[1][0].status = true;
board[1][1].status = true;
board[1][2].status = true;
board[1][3].status = true;
board[1][4].status = true;

board[0][0].status = true;
board[1][1].status = true;
board[2][2].status = true;
board[3][3].status = true;
board[4][4].status = true;

board[0][4].status = true;
board[1][3].status = true;
board[2][2].status = true;
board[3][1].status = true;
board[4][0].status = true;
*/