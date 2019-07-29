// Función suma simple de dos números
function suma(pNum1, pNum2) {
    return pNum1 + pNum2;
}
let n = 45;
let total = suma(n, 6);

// Función suma simple con sintaxis arrow functions
let suma_v2 = (pNum1, pNum2) => pNum1 + pNum2;
suma_v2(4, 5);

// Función arrow
let mostrarMensaje = () => console.log('Pasan 3 segundos');

// Llamada a setTimeout simple
setTimeout(function () { console.log('Pasan 5 segundos') }, 5000);

// Función para realizar la suma y, una vez ejecutada, llamar a la función done con el total.
function sumaCompleja(pNum1, pNum2, done) {
    let total = pNum1 + pNum2;
    done(total)
}

// Ejemplo de flujo asíncrono llamando a la función sumaCompleja
console.log('UNO');
setTimeout(() => console.log('Pasan 3 segundos'), 3000);
sumaCompleja(7, 9, (resultado) => {
    console.log(resultado)
});
console.log('DOS');

// Lo mismo que la función sumaCompleja, pero devolviendo la suma despues de XX segundos
function sumaRetardo(pNum1, pNum2, sec, done) {
    setTimeout(() => {
        let total = pNum1 + pNum2;
        done(total);
    }, sec);
}
sumaRetardo(3, 4, 2000, (total) => {
    console.log(total)
})

// Realización de la función suma a través de promesas
function sumaPromesa(pNum1, pNum2, sec) {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(pNum1 + pNum2);
        }, sec);
    });
    return prom;
}

let p1 = sumaPromesa(5, 9, 2000);
p1.then((resultado) => {
    console.log(resultado);
});