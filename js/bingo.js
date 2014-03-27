$(document).ready(function() {

    //create the bingo board
    var board = new Array(5);
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
            if (row == 3 && col == 3) {
                board[row][col] = createCell("FREE");
            } else {
                board[row][col] = createCell(wordList.pop());
            }
        }
    }
    //register events for listeners
});

function createCell(newtext) {
    return {
        text: newtext,
        status: false
    }
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};