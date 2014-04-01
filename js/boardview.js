$(document).ready(function(){
  initializeBoardView();
  updateBoardView();

  $(".cell").on('click',function(e){
    row = $(e.target).closest(".cell").data().row;
    col = $(e.target).closest(".cell").data().col;
    talk($(e.target).text())
    toggleStatus(row,col);
    updateCellView(row,col);
    notifyWin();
  });

  $("#reset-button").on("click",function(){
    resetBoard();
    location.reload();
  });
});

function notifyWin(){
  if(checkWin(board)){
    talk("Holy cow you won!")
    $(".cell").off();
    // return window.setTimeout(function(){resetBoard(); location.reload();}, 1000)
  }
}


function updateBoardView(){
  for(var x = 0;x<5;x++){
    for(var y=0;y<5;y++){
      updateCellView(x,y)
    }
  }
}

function updateCellView(row,col){
  if (board[row][col].status)
    getCell(row,col).addClass("active")
  else 
   getCell(row,col).removeClass("active")
}

function initializeBoardView(){
  for(var x = 0;x<5;x++){
    for(var y=0;y<5;y++){
      getCell(x,y).append("<div class=\"wrap\"><p>"+board[x][y].text+"</p></div>");
    }
  } 
}

function getCell(row,col){
  return $("[data-row$='"+row+"'][data-col$='"+col+"']");
}



// For testing only
function seedData(){
  var content = getContent();
  for(var x = 0;x<5;x++){
    for(var y=0;y<5;y++){
      var next = content.pop()
      board[x][y].text = next;
      getCell(x,y).append("<span>"+next+"</span>");
    }
  }  
}

// function getContent(){
//   var content_array = ["What?","Does that work?","That didn’t work.","Really!?",
//     "At the end of the day…","That’s ridiculous!","Ruby/Rails is awesome.",
//     "Whomp whomp.","Tada!","_____ is making my head explode","Any questions?",
//     "Stupid programmers.","Good job!","This is so cool!","Avi dismisses a question",
//     "Avi forgets to turn on join.me/record.","Avi’s hipchat window pops up",
//     "Avi Curses","Avi asks Logan a question","Does that work?","That didn’t work.",
//     "Really!?","At the end of the day…","That’s ridiculous!","What?"];
//   return content_array;
// }


