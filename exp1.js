/* JS file for exp1.html*/

$(document).ready(function () {

    $("#span1").text("This is text assigned from jQuery");

    $("#btn1").click(function() {
        $("#span1").text("The button has been clicked!");

    });


}); // ends document.ready