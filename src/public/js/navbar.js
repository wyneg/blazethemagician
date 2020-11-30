$(function () {
    "use strict";

    $("#inicio1").on("click", function () {
        console.log(document.URL.toString());
        $("#fuego1").attr("src", "images/favicon11.gif");
        $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#capitulos1").on("click", function () {
        console.log(document.URL.toString());
        $("#fuego2").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#galeria1").on("click", function () {
        console.log(document.URL.toString());
        $("#fuego3").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
    });
    
    $("#autor1").on("click", function () {
        console.log(document.URL.toString());
        $("#fuego4").attr("src", "images/favicon11.gif");
        $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
    });
});