/* JS file for exp1.html*/

$(document).ready(function () {

  $("#span1").text("This is text assigned from jQuery");

  $("#btn1").click(function () {
    //$("#span1").text("The button has been clicked!");
    //var xout = "button was clicked";
    document.getElementById("span1").innerHTML = sot.firstname + " " + sot.lastname;
    sot.firstname = "Lakis";
    sot.lastname = "Antoniou";

    $("#txtArea1").val(sot.firstname + " " + sot.lastname);


  });

}); // ends document.ready

class person {

    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    get firstname (){
        return this.fname;
    }

    get lastname(){
        return this.lname;
    }

    set firstname (name){
        this.fname = name;
    }

    set lastname(name){
        this.lname = name;
    }

} // ends class person

var sot = new person("Sot", "Fanou");

