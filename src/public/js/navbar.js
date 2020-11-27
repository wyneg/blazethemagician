$(function () {
    "use strict";
    
    $("a.dirweb").click(function (e) {
        e.preventDefault();
     });
    
    function antorchas() {
        $("#izqOff").attr("src", "images/Torch-izqOff.gif");
        $("#derOff").attr("src", "images/Torch-derOff.gif");
        $("#negrito1,#negrito2").css("opacity", "0");
    }

    function animAntorchas () {
		setTimeout(function () {
		  $("#izqOff").attr("src", "images/Torch-izqOn.gif");
		  $("#negrito1").css("opacity", "0.5");
		  $(".torch").css("background", "linear-gradient(to right, #F2F5A9, #FF8000, black)");
		
		  setTimeout(function () {
			$("#derOff").attr("src", "images/Torch-derOn.gif");
			$("#negrito1").css("opacity", "0.5");
			$(".torch").css("background", "linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000)");
			
				setTimeout(function () {
					$("#negrito1").css("opacity", "1");
					$(".torch").css("background", "transparent");
					$(".img").css("background", "");
					$(".caca").css("pointer-events", "all");
				}, 400);
				
			         setTimeout(function () {
				        $("#negrito1").css("opacity", "1");
				        $(".torch").css("background", "transparent");
				        $(".img").css("background", "");
				        $(".caca").css("pointer-events", "all");
			         }, 400);
			
		  }, 1000);
		
	}, 1000);
	};

    $("#inicio1").on("click", function () {
        fuegos(1);
        antorchas();
	});
	
	
	$("#capitulos1").on("click", function () {
        fuegos(2);
        animAntorchas();
	});
    
    $("#galeria1").on("click", function () {
        fuegos(3);
        antorchas();
	});
	
	$("#autor1").on("click", function () {
        fuegos(4);
        antorchas();
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
});