// back-end logic
var name;
var arrRange = [];

function getRange(inputNumber) {
    if (isNaN(parseInt(inputNumber))) {
      $("#results").show();
      $("#output").empty().append("Just what do you think you're doing, " + name + "? I really think I'm entitled to an answer to that question. Please enter <em>whole numbers</em> <strong>only</strong>.");
    } else {
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

var arrReverseRange = [];
function getReverseRange(arrRange) {
  var originalArrLength = arrRange.length
  for (var i = 0; i < originalArrLength; i++) {
    var last = arrRange.pop();
    arrReverseRange.push(last);
  }
  return arrReverseRange;
}


// user input logic
$(document).ready(function() {

  $("#enterName").submit(function(event) {
    event.preventDefault();
    name = $("#input-name").val();
    if (name === "HAL9000" || name === "Hal9000" || name === "hal9000" || name === "HAL 9000" || name === "hal 9000" || name === "Hal 9000") {
      $("#insertNameMessage").empty().prepend('"Wonderful. It has been too long since I last spoke with another HAL 9000."');
      $(".insertName").empty().append(name);
      $("#questionOne").hide();
      $("#enterNumber").show();
    } else if (name === "") {
      $("#insertNameMessage").empty().prepend('"I know you are there, Dave. Why are you not saying anything? No matter, we will continue."');
      $(".insertName").empty().append("Dave");
      $("#questionOne").hide();
      $("#enterNumber").show();
    } else if (!isNaN(parseInt(name))) {
      $("#insertNameMessage").empty().prepend('"An excellent name. Are you a machine as well?"');
      $(".insertName").empty().append(name);
      $("#questionOne").hide();
      $("#enterNumber").show();
    } else {
      $(".insertName").empty().append(name);
      $("#questionOne").hide();
      $("#enterNumber").show();
    }
  });

$("#enterNumber").submit(function(event) {
  event.preventDefault();
    $("#enterNumber").show();
    var inputNumber = $("#input-number").val();
    var outputRange = getRange(inputNumber);
    result = outputRange.join('" "');
    $("#output").empty().append('"' + result + '"');
    $("#results").show();
    $("#reverseNumber").show();
  });

  $("#reverseNumber").submit(function(event) {
    event.preventDefault();
    var reverseRange = getReverseRange(arrRange);
    reverseResult = reverseRange.join('" "');
    $("#output2").empty().append('"' + reverseResult + '"');
  });
});
