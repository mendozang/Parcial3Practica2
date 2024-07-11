//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

let age = prompt("Introduce tu edad");
let text;
if (age > 99 || age <= 0) {
    text = "Introduce una edad valida";
} else if (age >= 18) {
    text = "Ya puedes conducir";
} else {
    text = "No puedes conducir";
}

document.getElementById("finalText").innerHTML = text;