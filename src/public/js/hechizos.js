// JavaScript Document
$(function () {
	"use strict";

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