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
                  document.getElementById("negrito1").setAttribute("style", "opacity: 1");
                  document.getElementById("capitulos").setAttribute("style", "background: transparent");
                  document.getElementById("kurobodi").setAttribute("style", "background: ''");
                  document.getElementById("negrito1").setAttribute("style", "pointer-events: all");
              }, 400);
              
                   setTimeout(function () {
                      document.getElementById("negrito1").setAttribute("style", "opacity: 1");
                      document.getElementById("capitulos").setAttribute("style", "background: transparent");
                      document.getElementById("kurobodi").setAttribute("style", "background: ''");
                      document.getElementById("negrito1").setAttribute("style", "pointer-events: all");
                   }, 400);
          
        }, 1000);
      
  }, 1000);
}

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
   
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem("Capitulo" + String(val), String(val));
    } else {
        console.log(typeof(Storage) + 'undefined');
    }
   
}

function pergamino(val) {
    $('#mod1').on('hidden.bs.modal', function (e) {
       $("#perg"+val).attr("src", "images/pergaminoquemandose.gif");
        setTimeout(function () {
            document.getElementById("modal" + String(val)).innerHTML = "Cap&iacute;tulo "+String(val)+" (leído)";
        }, 2800);
    });
}