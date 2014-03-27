$(document).ready(function(){
  

  // For testing only ************************************
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
  for(var x = 0;x<5;x++){
      for(var y=0;y<5;y++){
        getCell(x,y).append(makeid());
      }
    }  
}



