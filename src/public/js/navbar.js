$(function () {
    "use strict";
    
    $("a.dirweb").click(function (e) {
        e.preventDefault();
     });

    $("#inicio1").on("click", function () {
        fuegos(1);
        antorchas();
	});
	
	$("#capitulos1").on("click", function () {
        fuegos(2);
	});
    
    $("#galeria1").on("click", function () {
        fuegos(3);
        antorchas();
	});
	
	$("#autor1").on("click", function () {
        fuegos(4);
        antorchas();
	});
    
    function antorchas() {
        $("#izqOff").attr("src", "images/Torch-izqOff.gif");
        $("#derOff").attr("src", "images/Torch-derOff.gif");
        $("#negrito1,#negrito2").css("opacity", "0");
    }

    function fuegos(llama) {

        switch(llama) {
            case 1:
                $("#fuego1").attr("src", "images/favicon11.gif");
                $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
                break;
            case 2:
                $("#fuego2").attr("src", "images/favicon11.gif");
                $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
                break;
            case 3:
                $("#fuego3").attr("src", "images/favicon11.gif");
                $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
                break;
            case 4:
                $("#fuego4").attr("src", "images/favicon11.gif");
                $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
                break;
            default:
                console.log('¿Qué pasó aquí?');
        }
    }
});