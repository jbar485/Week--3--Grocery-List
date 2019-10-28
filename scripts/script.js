
$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    var groceryInput = $("input#listEntry").val().toUpperCase().split(",").sort();
    console.log("Grocery List: ", groceryInput)
    groceryInput.forEach(function(grocery){
      $("#listItems").append("<li>" + grocery + "</li>");
    });
    $(".container").hide();
      event.preventDefault();
  });
});
