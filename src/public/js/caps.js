function capLeidos() {
    var i;
    for (i = 1; i <= 100; i++) {
        if (localStorage.getItem("Capitulo"+i) === String(i)) {
            document.getElementById("modal"+i).innerHTML = "Cap&iacute;tulo "+i+" (leído)";
        }
    }
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
       localStorage.setItem("Capitulo" + val, val);
    }
   
}

function pergamino(val) {
    $('#mod1').on('hidden.bs.modal', function (e) {
       $("#perg"+val).attr("src", "images/pergaminoquemandose.gif");
        setTimeout(function () {
            document.getElementById("modal"+val).innerHTML = "Cap&iacute;tulo "+val+" (leído)";
        }, 2800);
    });
}