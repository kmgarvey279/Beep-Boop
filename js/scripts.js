// back-end logic
var name;
function getRange(inputNumber) {
  if (!Number.isInteger(parseInt(inputNumber))) {
  $("#output").empty().append("Just what do you think you're doing, " + name + "? Please enter <em>whole numbers</em> <strong>only</strong>.");
} else {
  var arrRange = [];
  for (var i = 0; i <= inputNumber; i++) {
    arrRange.push(i);
  }
  for (var j = 0; j < arrRange.length; j++) {
    var arrNumber = arrRange[j].toString();
    if (arrNumber.includes("3")) {
      arrRange[j] = "I'm sorry, " + name + ". I'm afraid I can't do that.";
    } else if (arrNumber.includes("2")) {
      arrRange[j] = "Boop!";
    } else if (arrNumber.includes("1")) {
      arrRange[j] = "Beep!";
    }
  }
  return arrRange;
}
}



// user input logic
$(document).ready(function() {
  $("#enterNumber").submit(function(event) {
    event.preventDefault();

    name = $("#input-name").val();
    $(".insertName").empty().append(name);
    $("#questionOne").hide();
    $("#questionTwo").show();
    var inputNumber = $("#input-number").val();
    var outputRange = getRange(inputNumber);
    result = outputRange.join('" "');
    $("#output").empty().append('"' + result + '"');
    $("#results").show();
    $("#reverseNumber").show();
  });
});
