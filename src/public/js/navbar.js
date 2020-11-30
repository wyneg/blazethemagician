$(function () {
    "use strict";
    
    /*$("a.dirweb").click(function (e) {
        e.preventDefault();
     });*/

    $('#inicio1').on('load', function() {
        $("#fuego1").attr("src", "images/favicon11.gif");
        $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
        antorchas();
    });

     $("#inicio1").on("click", function () {
        $("#fuego1").attr("src", "images/favicon11.gif");
        $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
        antorchas();
	});
	
	$("#capitulos1").on("click", function () {
        $("#fuego2").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
	});
    
    $("#galeria1").on("click", function () {
        $("#fuego3").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
        antorchas();
	});
	
	$("#autor1").on("click", function () {
        $("#fuego4").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
        antorchas();
	});
    
    function antorchas() {
        $("#izqOff").attr("src", "images/Torch-izqOff.gif");
        $("#derOff").attr("src", "images/Torch-derOff.gif");
    }

    /*function fuegos() {

        if($("#tituloBlaze").getElementById === 'Bienvenido a Blaze!'){
            $("#fuego1").attr("src", "images/favicon11.gif");
            $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
            antorchas();
        } else if($("#tituloBlaze").getElementById === 'Capítulos'){
            $("#fuego2").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
        } else if($("#tituloBlaze").getElementById === 'Galería'){
            $("#fuego3").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
            antorchas();
        } else if($("#tituloBlaze").getElementById === 'Wyneg S. Rhuntar'){
            $("#fuego4").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
            antorchas();
        }
    }*/
});