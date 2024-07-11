// pide una nota y muestra la calificación según la nota

let grade = prompt("Introduce tu nota");
let text;

if (grade >= 0 && grade <= 3) {
    text = "Muy deficiente";
}
else if (grade > 3 && grade <= 5) {
    text = "Insuficiente";
}
else if (grade > 5 && grade <= 6) {
    text = "Suficiente";
}
else if (grade > 6 && grade <= 7) {
    text = "Bien";
}
else if (grade > 7 && grade <= 9) {
    text = "Notable";
}
else if (grade > 9 && grade <= 10) {
    text = "Sobresaliente";
}
else {
    text = "Introduce una nota valida";
};

document.getElementById("finalGrade").innerHTML = text;