//Ejercicio 1. Saludo Introducir el nombre del usuario en un control de edición y al pulsar el botón SALUDAR visualizar el mensaje Hola nombre, yo soy PENTIUM 4.

let inputResult = document.getElementById('result');
let button1 = document.getElementById('boton1');

function ejercicio1(){
    let nombre = document.getElementById('nombre').value;
    inputResult.value = `Hola ${nombre},yo soy PENTIUM 4`;
}

//Ejercicio 2. Adivinar un número El programa generará un número aleatorio comprendido entre 1 y 100 e invitará al usuario a adivinarlo. Si el usuario introduce un número mayor que el generado se le presentará el mensaje INTÉNTELO CON UN NÚMERO MENOR, en caso contrario INTÉNTELO CON UN NÚMERO MAYOR. Cuando el número sea adivinado se le indicará al usuario el número de intentos. Se limitará a 6 dicho número de intentos.

let button2 = document.getElementById('boton2');
let modalButton = document.querySelector('.close-modal')
let numberToGuess = Math.floor(Math.random() * 100);
let modal = document.getElementById('modal');
let modalhint = document.getElementById('hint');
let tries = 6;

const ejercicio2 = () => {
    let userNumber = document.getElementById('number').value;
    modal.classList.remove('modalClose');
    modal.classList.add('modalOpen');
    if(tries > 0){
        if(userNumber != numberToGuess){
            modalhint.innerHTML = (userNumber < numberToGuess) ? "Inténtelo con un número mayor" : "Inténtelo con un número menor";
            tries --;
        } else{
            modalhint.innerHTML = `Enhorabuena lo ha adivinado y le han sobrado ${tries} intentos`;
            button2.disabled = true;
        }
    } else{
        modalhint.innerHTML = `Lo sentimos, ha excedido el número de intentos. El número era: ${numberToGuess}`
        button2.disabled = true;
    }
}

//Ejercicio 3. Lotería primitiva Cuando el usuario pulsa el botón GENERAR NÚMEROS, el programa generará de manera aleatoria 6 números comprendidos entre 1 y 49, sin repetir ninguno de ellos.

let button3 = document.querySelector('#boton3');

const ejercicio3 = () => {
    let lotteryArrayNums = new Array(6);
    let ejer3ResultDiv = document.querySelector('#ejercicio3Result');
    ejer3ResultDiv.innerHTML = "";

    for (let i = 0; i < lotteryArrayNums.length; i++) {
        let newLotteryNumber = Math.floor(Math.random() * 49);
        while (lotteryArrayNums.includes(newLotteryNumber)) {
            newLotteryNumber = Math.floor(Math.random() * 49);
        }
        lotteryArrayNums[i] = newLotteryNumber;
        ejer3ResultDiv.innerHTML += `${newLotteryNumber}  `
    }
}

//Ejercicio 4. Control de errores try_catch Se pulsará un botón y se mostrará un mensaje personalizado diciendo a los usuarios que pueden hacer clic en Aceptar para continuar viendo la página o haga clic en Cancelar para volver a la página principal. Si el método confirm devuelve false, el usuario hace clic en Cancelar, y el código redirige al usuario. Si el método confirm devuelve true, el código no hace nada

let button4 = document.querySelector('#boton4');
let modal4 = document.getElementById('modal4');
let modalButton4 = document.querySelector('.close-modal4');
let confirmButton = document.querySelector('#confirm');
let cancelButton = document.querySelector('#cancel');


const openModal4 = () => {
    modal4.classList.remove('modalClose');
    modal4.classList.add('modalOpen');
}

const ejercicio4 = (option) => {
    try {
        console.log(confirm(option.currentTarget.myParam));
        if(!option.currentTarget.myParam)
            throw(new Error('Se ha seleccionado cancelar'))
    } catch (error) {
        console.error(error);
        window.location.href = '../../';
    }
}

function confirm(option){
    return option;
}

//Ejercicio 5. Control de errores try_catch_throw Se solicita al usuario que introduzca un valor. Si el valor es superior a 10, inferior a 5, o no es un número, vamos a lanzar un error. El error es entonces atrapado por el argumento de la captura y dependiendo del error generado se presentará el mensaje de error apropiado.

let button5 = document.getElementById('boton5');

const ejercicio5 = () => {
    let ejer5input = document.querySelector('#ejer5Input').value;
    try {
        if(isNaN(ejer5input))
            throw(new Error(`No es un número: ${ejer5input}`));
        else{
            if(ejer5input > 10){
                throw(new Error(`El número es mayor que 10: ${ejer5input}`));
            }
            else if(ejer5input < 5){
                throw(new Error(`El número menor que 5: ${ejer5input}`));
            }
        }
    } catch (error) {
        console.error(error)
    }
}

window.onload = () => {
    button1.addEventListener('click', ejercicio1);
    button2.addEventListener('click', ejercicio2);
    button3.addEventListener('click', ejercicio3);
    button4.addEventListener('click', openModal4);
    button5.addEventListener('click', ejercicio5);
    modalButton.addEventListener('click', () => {
        modal.classList.remove('modalOpen');
        modal.classList.add('modalClose');
    })
    modalButton4.addEventListener('click', () => {
        modal4.classList.remove('modalOpen');
        modal4.classList.add('modalClose');
    })
    cancelButton.addEventListener('click', ejercicio4, false);
    cancelButton.myParam = false;
    confirmButton.addEventListener('click', ejercicio4, false);
    confirmButton.myParam = true;
}
