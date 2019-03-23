do {
    var num1;
    var num2;
    var option;
    var result;

    num1 = prompt("Ingrese primer número");

    while (num1 === "") {
        num1 = prompt("Ingrese primer número");
    }

    if (num1 === null) {
        break;
    }

    for (var i = 0; i < num1.length; i++) {
        while (num1.charCodeAt(i) < 46 || num1.charCodeAt(i) > 57 || num1.charCodeAt(i) === 47 || num1 === "" || num1 === " ") {
            num1 = prompt("Caracter inválido. Por favor ingrese únicamente primer número");
        }
    }

    num2 = prompt("Ingrese segundo número");

    while (num2 === "") {
        num2 = prompt("Ingrese segundo número");
    }

    if (num2 === null) {
        break;
    }

    for (var j = 0; j < num2.length; j++) {
        while (num2.charCodeAt(j) < 46 || num2.charCodeAt(j) > 57 || num2.charCodeAt(j) === 47 || num2 === "" || num2 === " ") {
            num2 = prompt("Caracter inválido. Por favor ingrese únicamente segundo número");
        }
    }

    option = prompt("Digite el número según corresponda:\n 1) Sumar esos 2 números \n 2)Restar esos 2 números \n 3) Multiplicar esos 2 números \n 4) Dividir esos 2 números \n 5) Sacar el residuo de esos 2 números \n 6)Concatenar esos 2 números \n 7) Salir del programa");

    while (option === "") {
        option = prompt("Digite el número según corresponda:\n 1) Sumar esos 2 números \n 2)Restar esos 2 números \n 3) Multiplicar esos 2 números \n 4) Dividir esos 2 números \n 5) Sacar el residuo de esos 2 números \n 6)Concatenar esos 2 números \n 7) Salir del programa");
    }

    for (var k = 0; k < option.length; k++) {
        while (option.charCodeAt(k) < 46 || option.charCodeAt(k) > 55 || option.charCodeAt(k) === 47 || option ==="" || option === " " || option.length !== 1) {
            option = prompt("Opción no válida. Digite únicamente el número según corresponda:\n 1) Sumar esos 2 números \n 2)Restar esos 2 números \n 3) Multiplicar esos 2 números \n 4) Dividir esos 2 números \n 5) Sacar el residuo de esos 2 números \n 6)Concatenar esos 2 números \n 7) Salir del programa");
        }
    }

    switch (option) {
        case "1":
            alert(suma(num1, num2));
            break;
        case "2":
            alert(resta(num1, num2));
            break;
        case "3":
            alert(multiplicación(num1, num2));
            break;
        case "4":
            alert(división(num1, num2));
            break;
        case "5":
            alert(residuo(num1, num2));
            break;
        case "6":
            alert(concatenar(num1, num2));
            break;
    }

    if (option === "7") {
        break;
    }

} while (option !== null);

//FUNCIONES
function suma(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
    return result;
}

function resta(num1, num2) {
    result = parseFloat(num1 - num2);
    return result;
}

function multiplicación(num1, num2) {
    result = parseFloat(num1 * num2);
    return result;
}

function división(num1, num2) {
    result = parseFloat(num1 / num2);
    return result;
}

function residuo(num1, num2) {
    result = parseFloat(num1 % num2);
    return result;
}

function concatenar(num1, num2) {
    result = num1 + num2;
    return result;
}
