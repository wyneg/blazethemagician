$(function () {
    "use strict";
    
    /*$("a.dirweb").click(function (e) {
        e.preventDefault();
     });*/

    $("#inicio1").on("click", function () {
        fuegos();
	});
	
	$("#capitulos1").on("click", function () {
        fuegos();
	});
    
    $("#galeria1").on("click", function () {
        fuegos();
	});
	
	$("#autor1").on("click", function () {
        fuegos();
	});
    
    function antorchas() {
        $("#izqOff").attr("src", "images/Torch-izqOff.gif");
        $("#derOff").attr("src", "images/Torch-derOff.gif");
        //$("#negrito1").css("opacity", "0");
    }

    function fuegos() {

        if($('#nav-link').getElementById === 'inicio1'){
            $("#fuego1").attr("src", "images/favicon11.gif");
            $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
            antorchas();
        } else if($('#nav-link').getElementById === 'capitulos1'){
            $("#fuego2").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
        } else if($('#nav-link').getElementById === 'galeria1'){
            $("#fuego3").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
            antorchas();
        } else if($('#nav-link').getElementById === 'autor1'){
            $("#fuego4").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
            antorchas();
        }
    }
});