console.log("----- Ejercicio C -----");

var cantidadDeGatos = 12;
var cantidadDePasos = 5;

for (var i = 1; i <= cantidadDeGatos; i++) {

    var gato = (i % 2 === 0) ? "🐈‍⬛" : "🐈";

    var pasos = "";

    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += "🐾";
    }

    console.log("Gato #" + i + ": " + gato + pasos);
}