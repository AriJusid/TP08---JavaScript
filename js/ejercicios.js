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
    console.log(total)
    r.innerHTML = "Total: " + total.toString()
}

//Yo objeto
const ciudad ={
    nombre: document.getElementById("nombre"),
    fechaFundacion: document.getElementById("fecha"),
    poblacion: document.getElementById("poblacion"),
    extension: document.getElementById("extension")
}

for(let prop in ciudad){
    
}
