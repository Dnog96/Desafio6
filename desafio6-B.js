console.log("----- Ejercicio B -----");

var cantidadDePasos = 8;

for (var i = 1; i <= cantidadDeGatos; i++) {

    var pasos = "";

    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos += "🐾";
    }

    console.log("Gato #" + i + ": 🐈" + pasos);
}