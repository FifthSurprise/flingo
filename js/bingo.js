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
    //Check rows
    for (var row = 0; row < board.length; row++) {
        if (true && board[row][0].status && board[row][1].status && board[row][2].status && board[row][3].status && board[row][4].status) {
            return true;
        }
    }
    //Check columns
    for (var col = 0; col < board.length; col++) {
        if (true && board[0][col].status && board[1][col].status && board[2][col].status && board[3][col].status && board[4][col].status) {
            return true;
        }
    }
    //Check Diagonal
    return false;
}

function checkVals(vals) {
    for (var value in vals) {
        if (value === false) {
            return false;
        }
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