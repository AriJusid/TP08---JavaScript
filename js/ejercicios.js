//Calculadora de Recaudación
function calRecaudacion (){
    let frase = document.getElementById("frase").value
    let detalle = frase.split(",")
    let monto, total = 0
    let result = document.getElementById("r")
    for (let i of detalle){
        monto = parseFloat(i.split(':')[1])
        total+=monto
    }
    r.innerHTML = "Total: " + total.toString()
}

//Yo objeto
const ciudad ={
    nombre: "París",
    fechaFundacion: "22/07/1820",
    poblacion: "3.548.000",
    extension: "5.040 mts"
}

for(let prop in ciudad){
    console.log(prop + ": " + ciudad[prop] + ", ")
}

//Reemplazar Palabras
function remplazar(){
let completa = document.getElementById("completa").value;
let remplazar = document.getElementById("palabraRemplazar").value;
let remplazo = document.getElementById("remplazo").value;

completa = completa.replaceAll(remplazar, remplazo);

console.log(completa);

document.getElementById('re').innerHTML= "Nueva Frase: " + completa;
}

//Cortar texto
function cortar(){
let cadena = document.getElementById("cadena").value
let posCortar = document.getElementById("cortar").value
document.getElementById('res').innerHTML= "Frase Cortada: " + cadena.slice(0,posCortar);

}

let resultadoDiv = document.getElementById('resultado');

// Mostrar frutas disponibles en consola
let frutas = ["manzana", "banana", "pera", "naranja", "uva", "kiwi", "mango", "cereza", "sandía", "limón"];
for (let frut in frutas) {
    console.log(frutas[frut]);  // Mostrar las frutas por consola
}

let frutaBuscada = prompt("Ingrese una fruta:");
if (frutas.includes(frutaBuscada)) {
    resultadoDiv.innerHTML += `Sí, tenemos ${frutaBuscada}! <br>`;
} else {
    resultadoDiv.innerHTML += `No, no tenemos ${frutaBuscada}! <br> `;
}

// Comparando datos y tipos en la página
resultadoDiv.innerHTML += "Comparando datos y tipos:<br>";
resultadoDiv.innerHTML += "10 == '10': " + (10 == '10') + " <br>";
resultadoDiv.innerHTML += "10 === '10': " + (10 === '10') + " <br>";
resultadoDiv.innerHTML += "typeof 10.6: " + (typeof 10.6) + " <br>";
resultadoDiv.innerHTML += "true == 1: " + (true == 1) + " <br>";
resultadoDiv.innerHTML += "true === 1: " + (true === 1) + " <br> <br>";

// Triángulo de asteriscos centrado 
function dibujarTrianguloCentrado(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacios = ' '.repeat(filas - i);  
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos + espacios);  
    }
}

// Triángulo de asteriscos simple 
function dibujarTrianguloSimple(filas) {
    for (let i = 1; i <= filas; i++) {
        console.log('*'.repeat(i));  
    }
}

dibujarTrianguloCentrado(5); 
dibujarTrianguloSimple(5);


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
resultadoDiv.innerHTML += `Hola ${nombre}, tenés ${edad} años!<br>`;

// Filtrar nombres que comienzan con 'A' y mostrarlos en el DOM
let nombres = prompt("Ingrese una lista de nombres separados por coma:");
let nombresArray = nombres.split(',');

let nombresConA = [];
for (let i = 0; i < nombresArray.length; i++) {
    let nombre = nombresArray[i];
    if (nombre.charAt(0).toLowerCase() === 'a') {
        nombresConA.push(nombre);
    }
}

resultadoDiv.innerHTML += "Nombres que comienzan con 'A': <br>";
for (let i = 0; i < nombresConA.length; i++) {
    resultadoDiv.innerHTML += `${nombresConA[i]}<br>`;
}

// Doble de elementos
function duplicarElementos(numeros) {
    return numeros.map(function(numero) {
        return numero * 2;
    });
}

let numeros = [1, 2, 3, 4, 5];
let numerosDuplicados = duplicarElementos(numeros);
resultadoDiv.innerHTML += `Números duplicados: ${numerosDuplicados}<br>`;


// Solicitar al usuario que ingrese una lista de elementos separados por comas
let entrada = prompt("Ingrese una lista de elementos separados por coma:");
let elementos = entrada.split(',');
let resultado = elementos.join(' - ');
document.getElementById('resultado').innerHTML += resultado;
