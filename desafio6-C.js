console.log("----- Ejercicio C -----");

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {

    var gato = (i % 2 === 0) ? "🐈‍⬛" : "🐈";

    var pasos = "";

    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += "🐾";
    }

    console.log("Gato #" + i + ": " + gato + pasos);
}