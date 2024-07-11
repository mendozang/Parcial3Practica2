// calcula valor de la letra de un numero de dni

do {
    let dniInput = prompt("Introduce el número de tu DNI");
    let dniNumber = Number(dniInput);
    if (dniInput == null) {
        break;
    }
    else if (!isNaN(dniNumber) > 0 && dniNumber < 99999999) {
        let letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        let letter = letters[dniNumber % 23];
        alert(`La letra de tu DNI es ${letter}`);
    }
    else {
        alert("El número de DNI introducido no es válido");
    }
} while (true);