var groceryList = [];
$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    var groceryInput = $("input#listEntry").val();
    groceryList.push(groceryInput);
    console.log("Grocery List: ", groceryInput)
  event.preventDefault();
  });
});
