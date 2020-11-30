// JavaScript Document
$(function () {
	"use strict";
	window.addEventListener('load', function(){
		setTimeout(function () {
			document.getElementById("izqOff").setAttribute("src", "images/Torch-izqOn.gif");
			document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
			document.getElementsByClassName("torch").setAttribute("style", "background: linear-gradient(to right, #F2F5A9, #FF8000, black");
		  
			setTimeout(function () {
			  document.getElementById("derOff").setAttribute("src", "images/Torch-derOn.gif");
			  document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
			  document.getElementsByClassName("torch").setAttribute("style", "background: linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000");
			  
				  setTimeout(function () {
					  document.getElementById("negrito1").setAttribute("style", "opacity: 1");
					  document.getElementsByClassName("torch").setAttribute("style", "background: transparent");
					  document.getElementsByClassName("img").setAttribute("style", "background: ''");
					  document.getElementsByClassName("caca").setAttribute("style", "pointer-events: all");
				  }, 400);
				  
					   setTimeout(function () {
						  document.getElementById("negrito1").setAttribute("style", "opacity: 1");
						  document.getElementsByClassName("torch").setAttribute("style", "background: transparent");
						  document.getElementsByClassName("img").setAttribute("style", "background: ''");
						  document.getElementsByClassName("caca").setAttribute("style", "pointer-events: all");
					   }, 400);
			  
			}, 1000);
		  
	  }, 1000);
	},false);
	
	//$('#capitulos1').on('click', function() {
	/*function hagaseLaLuz() {
		setTimeout(function () {
		  //$("#izqOff").attr("src", "images/Torch-izqOn.gif");
		  document.getElementById("izqOff").setAttribute("src", "images/Torch-izqOn.gif");
		  //$("#negrito1").css("opacity", "0.5");
		  document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
		  //$(".torch").css("background", "linear-gradient(to right, #F2F5A9, #FF8000, black)");
		  document.getElementsByClassName("torch").setAttribute("style", "background: linear-gradient(to right, #F2F5A9, #FF8000, black");
		
		  setTimeout(function () {
			//$("#derOff").attr("src", "images/Torch-derOn.gif");
			document.getElementById("derOff").setAttribute("src", "images/Torch-derOn.gif");
			//$("#negrito1").css("opacity", "0.5");
			document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
			//$(".torch").css("background", "linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000)");
			document.getElementsByClassName("torch").setAttribute("style", "background: linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000");
			
				setTimeout(function () {
					//$("#negrito1").css("opacity", "1");
					document.getElementById("negrito1").setAttribute("style", "opacity: 1");
					//$(".torch").css("background", "transparent");
					document.getElementsByClassName("torch").setAttribute("style", "background: transparent");
					//$(".img").css("background", "");
					document.getElementsByClassName("img").setAttribute("style", "background: ''");
					//$(".caca").css("pointer-events", "all");
					document.getElementsByClassName("caca").setAttribute("style", "pointer-events: all");
				}, 400);
				
			         setTimeout(function () {
						//$("#negrito1").css("opacity", "1");
						document.getElementById("negrito1").setAttribute("style", "opacity: 1");
						//$(".torch").css("background", "transparent");
						document.getElementsByClassName("torch").setAttribute("style", "background: transparent");
						//$(".img").css("background", "");
						document.getElementsByClassName("img").setAttribute("style", "background: ''");
						//$(".caca").css("pointer-events", "all");
						document.getElementsByClassName("caca").setAttribute("style", "pointer-events: all");
			         }, 400);
			
		  }, 1000);
		
	}, 1000);
	}*/

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