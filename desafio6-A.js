console.log("----- Ejercicio A -----");

var cantidadDeGatos = 10;


var gatos = ["😺", "😸", "😹"];


for (var i = 1; i <= cantidadDeGatos; i++) {

  var emoji = gatos[(i - 1) % 3];

  console.log("Gato #" + i + ": " + emoji);
}