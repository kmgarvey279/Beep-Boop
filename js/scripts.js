// back-end logic
function getRange(inputNumber) {
  var arrRange = [];
  for (var i = 0; i <= inputNumber; i++) {
    arrRange.push(i);
  }
}



// user input logic
$(document).ready(function() {
  $("#enterNumber").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#input").val();
    var outputRange = getRange(inputNumber);

  });
});
