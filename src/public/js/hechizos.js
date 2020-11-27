// JavaScript Document
$(function () {
	"use strict";

	function prenderAntorchas() {
		capLeidos();
		animAntorchas();
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

	$("#derOff").on("click", function () {
		$("#derOff").attr("src", "images/Torch-derOn.gif");
		if ($("#izqOff").attr('src') === 'images/Torch-izqOn.gif') {
			$("#negrito1").css("opacity", "1");
			$(".torch").css("background", "transparent");
			$(".img").css("background", "");
			$(".caca").css("pointer-events", "all");
		} else {
			$("#negrito1").css("opacity", "0.5");
			$(".torch").css("background", "linear-gradient(to left, transparent, #FF8000, black)");
		}
	});
	
	$("#izqOff").on("click", function () {
		$("#izqOff").attr("src", "images/Torch-izqOn.gif");
		if ($("#derOff").attr('src') === 'images/Torch-derOn.gif') {
			$("#negrito1").css("opacity", "1");
			$(".torch").css("background", "transparent");
			$(".img").css("background", "");
			$(".caca").css("pointer-events", "all");
		} else {
			$("#negrito1").css("opacity", "0.5");
			$(".torch").css("background", "linear-gradient(to right, transparent, #FF8000, black)");
		}
	});
	
	$("#izqOff").on("dblclick", function () {
		$("#izqOff").attr("src", "images/Torch-izqOff.gif");
		if ($("#derOff").attr('src') === 'images/Torch-derOff.gif') {
			$("#negrito1").css("opacity", "0");
			$(".torch,.img").css("background", "black");
			$(".caca").css("pointer-events", "none");
		} else {
			$("#negrito1").css("opacity", "0.5");
			$(".torch").css("background", "linear-gradient(to left, transparent, #FF8000, black)");
			$(".caca").css("pointer-events", "none");
		}
	});
	
	$("#derOff").on("dblclick", function () {
		$("#derOff").attr("src", "images/Torch-derOff.gif");
		if ($("#izqOff").attr('src') === 'images/Torch-izqOff.gif') {
			$("#negrito1").css("opacity", "0");
			$(".torch,.img").css("background", "black");
			$(".caca").css("pointer-events", "none");
		} else {
			$("#negrito1").css("opacity", "0.5");
			$(".torch").css("background", "linear-gradient(to right, transparent, #FF8000, black)");
			$(".caca").css("pointer-events", "none");
		}
	});
});

function showCap(val) {
	if (val === "") {
		document.getElementById("capis").innerHTML = "";
		return;
	} else {
		if (window.XMLHttpRequest) {
			xhttp = new XMLHttpRequest();
		} else {
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			document.getElementById("capis").innerHTML = this.responseText;
		}
			
	};
		xhttp.open("GET", "conexion2.php?q=" + val, true);
		xhttp.send();
	}
   
	if (typeof (Storage) !== 'undefined') {
	   localStorage.setItem("Capitulo" + val, val);
	}
   
}

function capLeidos() {
	var i;
	for (i = 1; i <= 80; i++) {
		if (localStorage.getItem("Capitulo"+i) === String(i)) {
			document.getElementById("modal"+i).innerHTML = "Cap&iacute;tulo "+i+" (leído)";
		}
	}
}

function pergamino(val) {
	/*$('#mod1').on('hidden.bs.modal', function (e) {
	   //$("#perg"+val).attr("src", "images/pergaminoquemandose.gif");
	});*/
	document.getElementById('#mod1').on('hidden.bs.modal') = function(){
		document.getElementById('#perg'+val).attr('src', 'images/pergaminoquemandose.gif');
		setTimeout(function () {
			document.getElementById("modal"+val).innerHTML = "Cap&iacute;tulo "+val+" (leído)";
		}, 2800);
	};
}