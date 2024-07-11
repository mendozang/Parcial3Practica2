// pide cadena de texto hasta que se cancele, al cancelar se muestran todas concatenadas con un guion
let finalText = "";

do {
    let textInput = prompt("Introduce una cadena de texto");
    if (textInput == null) {
        break;
    }
    finalText += textInput + "-";
}
while (true);

if (finalText.length > 0) {
    finalText = finalText.slice(0, -1);
}

document.getElementById("finalText").innerHTML = finalText;

