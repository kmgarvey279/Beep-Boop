// back-end logic
function getRange(inputNumber) {
  if (!Number.isInteger(parseInt(inputNumber))) {
  $("#output").empty().append("Just what do you think you're doing, Dave? Please enter <em>whole numbers</em> <strong>only</strong>.");
} else {
  var arrRange = [];
  for (var i = 0; i <= inputNumber; i++) {
    arrRange.push(i);
  }
  for (var j = 0; j < arrRange.length; j++) {
    var arrNumber = arrRange[j].toString();
    if (arrNumber.includes("3")) {
      arrRange[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
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
    var name = $("#input-name").val();
    $(".insertName").empty().append(name);
    $("#questionOne").show();
    
    var inputNumber = $("#input-number").val();
    var outputRange = getRange(inputNumber);
    result = outputRange.join('" "');

    $("#output").empty().append('"' + result + '"');
  });
});
