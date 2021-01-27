// this is marios first lesson 27 01 2021

/* i have no idea what to write....
this game is inspired by the battle cats.  */

$(document).ready(function () {

  var level = 0;
  var myvar2 = "maryana";

  $("#btn1").click(function () {
    
    level = level + 1;

    $("#txt1").val("The level is " + level);

    // this is the second textbox
    //$("#txtArea1").val("");
    $("#span1").text(myvar2);
  });

}); // ends document.ready
