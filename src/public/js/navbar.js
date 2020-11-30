$(function () {
    "use strict";

    switch(URL){
        case 'https://blazethemagician.herokuapp.com/capitulos':
            $("#fuego2").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego3,#fuego4").attr("src", "images/espacio.png");
            break;
        case 'https://blazethemagician.herokuapp.com/galeria':
            $("#fuego3").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego4").attr("src", "images/espacio.png");
            break;
        case 'https://blazethemagician.herokuapp.com/autor':
            $("#fuego4").attr("src", "images/favicon11.gif");
            $("#fuego1,#fuego2,#fuego3").attr("src", "images/espacio.png");
            break;
        default:
            $("#fuego1").attr("src", "images/favicon11.gif");
            $("#fuego2,#fuego3,#fuego4").attr("src", "images/espacio.png");
            break;
    }

    /*$("#inicio1").on("click", function () {
        console.log(document.URL.toString());
        
    });
    
    $("#capitulos1").on("click", function () {
        console.log(document.URL.toString());
        
    });
    
    $("#galeria1").on("click", function () {
        console.log(document.URL.toString());
        
    });
    
    $("#autor1").on("click", function () {
        console.log(document.URL.toString());
        
    });*/
});