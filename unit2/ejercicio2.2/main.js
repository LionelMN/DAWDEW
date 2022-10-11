window.onload = () => {
    button1.addEventListener('click', ejercicio1);
    button2.addEventListener('click', ejercicio2);
    modalButton.addEventListener('click', () => {
        modal.classList.remove('modalOpen');
        modal.classList.add('modalClose');
    })
}

//Ejercicio 1. Saludo Introducir el nombre del usuario en un control de edición y al pulsar el botón SALUDAR visualizar el mensaje Hola nombre, yo soy PENTIUM 4.

let inputResult = document.getElementById('result');
let button1 = document.getElementById('boton1');

function ejercicio1(){
    let nombre = document.getElementById('nombre').value;
    inputResult.value = `<p><strong>Hola ${nombre},</strong> yo soy PENTIUM 4`;
}

//Ejercicio 2. Adivinar un número El programa generará un número aleatorio comprendido entre 1 y 100 e invitará al usuario a adivinarlo. Si el usuario introduce un número mayor que el generado se le presentará el mensaje INTÉNTELO CON UN NÚMERO MENOR, en caso contrario INTÉNTELO CON UN NÚMERO MAYOR. Cuando el número sea adivinado se le indicará al usuario el número de intentos. Se limitará a 6 dicho número de intentos.

let button2 = document.getElementById('boton2');
let modalButton = document.querySelector('.close-modal')
let numberToGuess = Math.floor(Math.random() * 100);
let modal = document.getElementById('modal');
let modalhint = document.getElementById('hint');
let tries = 6;

ejercicio2 = () => {
    let userNumber = document.getElementById('number').value;
    modal.classList.remove('modalClose');
    modal.classList.add('modalOpen');
    if(tries > 0){
        if(userNumber != numberToGuess){
            modalhint.innerHTML = (userNumber < numberToGuess) ? "Inténtelo con un número mayor" : "Inténtelo con un número menor";
            tries --;
        } else{
            modalhint.innerHTML = `Enhorabuena lo ha adivinado y le han sobrado ${tries} intentos`;
        }
    } else{
        modalhint.innerHTML = `Lo sentimos, ha excedido el número de intentos. El número era: ${numberToGuess}`
        button2.disabled = true;
    }
}