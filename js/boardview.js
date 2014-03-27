$(document).ready(function(){
  

  // For testing only ************************************
  seedData();
  $("#seed_btn").on("click",function(){
    seedData();
  })
  // **********************************************
})


function getCell(row,col){
  return $("[data-row$='"+row+"'][data-col$='"+col+"']");
}



// For testing only
function seedData(){
  var content = getContent();
  for(var x = 0;x<5;x++){
    for(var y=0;y<5;y++){
      getCell(x,y).append("<span>"+content.pop()+"</span>");
    }
  }  
}

function getContent(){
  var content_array = ["What?","Does that work?","That didn’t work.","Really!?",
    "At the end of the day…","That’s ridiculous!","Ruby/Rails is awesome.",
    "Whomp whomp.","Tada!","_____ is making my head explode","Any questions?",
    "Stupid programmers.","Good job!","This is so cool!","Avi dismisses a question",
    "Avi forgets to turn on join.me/record.","Avi’s hipchat window pops up",
    "Avi Curses","Avi asks Logan a question","Does that work?","That didn’t work.",
    "Really!?","At the end of the day…","That’s ridiculous!","What?"];
  return content_array;
}


