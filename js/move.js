var w = window.innerWidth;
var h = window.innerHeight;

var intro = document.getElementsByClassName("intro")[0];
var historia = document.getElementsByClassName("historia")[0];
var parrafos = document.getElementsByClassName("parrafos")[0];
var sonido = document.getElementById("sonido");

intro.style.fontSize = w / 80 + "px";
historia.style.fontSize = w / 90 + "px";
parrafos.style.height = h + "px";

window.addEventListener("resize", function () {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    intro.style.fontSize = w / 80 + "px";
    historia.style.fontSize = w / 90 + "px";
    parrafos.style.height = h + "px";
    inicio();
});

function animar() {
    intro.className = 'intro texto_intro animacion_intro';
    historia.className = 'historia texto_historia animacion_historia';
    sonido.play();
    ocultar();
}

var num = 200;
var tamaño = 2;
var elementos = [];

inicio();

function inicio() {
    for (var i = 0; i < num; i++) {
        elementos[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            tamaño: Math.random() * tamaño
        }
    }
}

var clic = 1;
function ocultar() {
    if (clic == 1) {
        //document.getElementById("direccion").style.display = "initial";
        document.getElementById("hologram").style.display = "none";
        clic = clic + 1;
    } else {
        //document.getElementById("direccion").style.display = "initial";
        document.getElementById("hologram").style.display = "initial";
        clic = 1;
    }
}


