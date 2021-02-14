// this is marios lesson 2  14 02 2021

/*  this game is inspired by the battle cats.  */

$(document).ready(function () {
  var level = 1;
  $("#txtLevel").val("Your level: " + level);

  var gamePoints = 0;
  $("#txtPoints").val("Your points: " + gamePoints);

  $("#btnAnswer").click(function () {
    var numb1 = $("#txtNumber1").val();
    var numb2 = $("#txtNumber2").val();

    var computerAnswer = parseInt(numb1) + parseInt(numb2);

    var UsersAnswer = $("#txtaAnswer").val();

    console.log("the value of computerAnswer is: " + computerAnswer);
    console.log("the value of UsersAnswer is: " + UsersAnswer);

    if (computerAnswer == UsersAnswer) {
      alert("YOUR ANSWER IS CORRECT!!!");
    } else {
      alert("YOUR ANSWER IS WRONG!!!");
    }

    $("#txtLevel").val("The level is " + level);

    // this is the second textbox
    //$("#txtArea1").val("");
    // $("#span1").text(myvar2);
  });
}); // ends document.ready
