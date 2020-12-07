function lucesycaps(){
    capsLeidos();
    antorchas();
}

function capsLeidos(){
    var i;
    for (i = 1; i <= 100; i++) {
        if (localStorage.getItem("Capitulo" + String(i)) === String(i)) {
            document.getElementById("modal" + String(i)).innerHTML = "Cap&iacute;tulo " + String(i) + " (leído)";
        }
    }
}

function antorchas(){
    setTimeout(function () {
        document.getElementById("izqOff").setAttribute("src", "images/Torch-izqOn.gif");
        document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
        document.getElementById("capitulos").setAttribute("style", "background: linear-gradient(to right, #F2F5A9, #FF8000, black");
      
        setTimeout(function () {
          document.getElementById("derOff").setAttribute("src", "images/Torch-derOn.gif");
          document.getElementById("negrito1").setAttribute("style", "opacity: 0.5");
          document.getElementById("capitulos").setAttribute("style", "background: linear-gradient(to left, #F2F5A9, #FAAC58, #FF8000");
          
              setTimeout(function () {
                  document.getElementById("negrito1").setAttribute("style", "opacity: 1; pointer-events: all");
                  document.getElementById("capitulos").setAttribute("style", "background: transparent");
                  document.getElementById("kurobodi").setAttribute("style", "background: ''");
              }, 400);
        }, 1000);
  }, 1000);
}

function pergamino(val) {
    $('#mod1').on('hidden.bs.modal', function (e) {
       $("#perg"+val).attr("src", "images/pergaminoquemandose.gif");
        setTimeout(function () {
            document.getElementById("modal" + String(val)).innerHTML = "Cap&iacute;tulo "+String(val)+" (leído)";
        }, 2800);
    });
}