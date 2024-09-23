// TIRANDO FRUTA
let fruyftas = ["manzana", "banana", "pera", "naranja", "uva", "kiwi", "mango", "cereza", "sandía", "limón"];

console.log("Las frutas disponibles son:");
frutas.forEach(function(fruta) {
    console.log(fruta);
});

let frutaBuscada = prompt("Ingrese una fruta:");

if (frutas.includes(frutaBuscada)) {
    console.log(`Sí, tenemos ${frutaBuscada}!`);
} else {
    console.log(`No, no tenemos ${frutaBuscada}!`);
}


// Comparando datos y tipos

console.log(10 == '10'); // true

console.log(10 === '10'); // false

console.log(typeof 10.6); // "number"

console.log(true == 1);  // true

console.log(true === 1); // false


// Doble de elementos

function duplicarElementos(array) {
    let nuevoArray = array.map(function(numero) {
        return numero * 2;
    });
    return nuevoArray;
}



let numeros = [1, 2, 3, 4, 5];
let numerosDuplicados = duplicarElementos(numeros);

console.log(numerosDuplicados); 


//Triángulo de asteriscos

function dibujarTrianguloSimple(filas) {
    for (let i = 1; i <= filas; i++) {
        console.log('*'.repeat(i));
    }
}

dibujarTrianguloSimple(5);


function dibujarTrianguloCentrado(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacios = ' '.repeat(filas - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos + espacios);
    }
}

dibujarTrianguloCentrado(5);

// Filtrar nombres que comienzan con 'A' y mostrarlos en el DOM

let nombres = prompt("Ingrese una lista de nombres separados por coma:");

let nombresArray = nombres.split(',');

let nombresConA = [];
for (let i = 0; i < nombresArray.length; i++) {
    let nombre = nombresArray[i].trim();
    if (nombre.charAt(0).toLowerCase() === 'a') {
        nombresConA.push(nombre);
    }
}

for (let i = 0; i < nombresConA.length; i++) {
    let li = document.createElement("li");
    li.textContent = nombresConA[i];
}


// Calculadora de edad


function calcularEdad(fechaNacimiento) {
    let fechaActual = new Date();
    let fechaNac = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    let mes = fechaActual.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

let nombre = prompt("¿Cuál es tu nombre?");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD)");

let edad = calcularEdad(fechaNacimiento);

console.log(`Hola ${nombre}, tienes ${edad} años!`);
