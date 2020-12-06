/* JS file for exp1.html*/

$(document).ready(function () {

  $("#span1").text("This is text assigned from jQuery");

  $("#btn1").click(function () {
    //$("#span1").text("The button has been clicked!");
    var xout = "button was clicked";
    document.getElementById("span1").innerHTML = xout;
  });

}); // ends document.ready
