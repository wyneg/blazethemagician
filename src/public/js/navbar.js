$(function () {
	"use strict";
    
    /*function antorchas() {
        $("#izqOff").attr("src", "images/Torch-izqOff.gif");
        $("#derOff").attr("src", "images/Torch-derOff.gif");
        $("#negrito1,#negrito2").css("opacity", "0");
    }*/

    $("#inicio1").on("click", function () {
        secciones(1);
		fuegos(1);
	});
	
	
	$("#capitulos1").on("click", function () {
        secciones(2);
		fuegos(2);
	});
    
    $("#galeria1").on("click", function () {
        secciones(3);
		fuegos(3);
	});
	
	$("#autor1").on("click", function () {
        secciones(4);
		fuegos(4);
	});
    
    function fuegos(llama) {
        
        if (llama === 1) {
            $("#fuego1").attr("src", "images/favicon11.gif");
            $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
        } else if (llama === 2) {
            $("#fuego2").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
        } else if (llama === 3) {
            $("#fuego3").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
        } else if (llama === 4) {
            $("#fuego4").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
        }
    }
    
    function secciones(partes) {
        
        if (partes === 1) {
            $("#inicio").attr("style", "display : inline");
            $("#heder").attr("style", "display : block");
            $("#capitulos,#galeria,#autor").attr("style", "display : none");
        } else if (partes === 2) {
            $("#capitulos").attr("style", "background : black");
            $("#inicio,#galeria,#autor,#heder").attr("style", "display : none");
        } else if (partes === 3) {
            $("#galeria").attr("style", "display : inline");
            $("#inicio,#capitulos,#autor,#heder").attr("style", "display : none");
        } else if (partes === 4) {
            $("#autor").attr("style", "display : inline");
            $("#inicio,#galeria,#capitulos,#heder").attr("style", "display : none");
        }
    }
});