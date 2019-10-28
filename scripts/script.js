var groceryList = [];
var newList = [];
$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    var groceryInput = $("input#listEntry").val().toUpperCase().split(" ").sort();
    groceryList.push(groceryInput);
    console.log("Grocery List: ", groceryInput)

    groceryInput.forEach(function(grocery){
      $("#listItems").append("<li>" + grocery + "</li>");
    });



    // if(groceryList.includes(",")){
    //   groceryList.split(",");
    //   newList.push("groceryList");
    //   console.log("New List: ", newList);
    // }


    // $(".container").hide();
  event.preventDefault();
  });
});
