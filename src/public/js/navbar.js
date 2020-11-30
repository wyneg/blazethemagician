$(function () {
    "use strict";
    
    $('#inicio1').on('load', function() {
        $("#fuego1").attr("src", "images/favicon11.gif");
        $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
    });

        $("#inicio1").on("click", function () {
        $("#fuego1").attr("src", "images/favicon11.gif");
        $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#capitulos1").on("click", function () {
        $("#fuego2").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#galeria1").on("click", function () {
        $("#fuego3").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#autor1").on("click", function () {
        $("#fuego4").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
    });
});