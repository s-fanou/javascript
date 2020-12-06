/* JS file for exp1.html*/

$(document).ready(function () {
  $("#span1").text("This is text assigned from within");

  $("#btn1").click(function () {
    //$("#span1").text("The button has been clicked!");
    var x = car.myFunction("sot", "fanou");
    document.getElementById("span1").innerHTML = x;
  });
}); // ends document.ready

var car = {}; //this is another way to say new Object()

car.type = "Fiat";
car.model = "500";
car.color = "white";
car.myFunction = function (param1, param2) {
  //function does something
  return param1 + " " + param2;
}; //If I remove this ';' it still works !!!
