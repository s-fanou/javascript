/* JS file for exp1.html*/

$(document).ready(function () {

  $("#span1").text("This is text assigned from jQuery to span1");

  $("#span2").text("This is text assigned from jQuery to span2");

  $("#btn1").click(function () {
    
    //$("#span1").text("The button has been clicked!");

    //var xout = "button was clicked";
    //document.getElementById("span1").innerHTML = xout;

    $("#txtArea1").val("Text assigned to txtArea1 by clicking the button");

  });

}); // ends document.ready
