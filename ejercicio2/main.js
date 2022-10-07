let nombre = document.getElementById('nombre').value;

let div = document.getElementById('prueba');

let button = document.getElementById('boton');
//button.addEventListener('click', onclick());

function onClick(){
    nombre = document.getElementById('nombre').value;
    div.innerHTML = nombre;
}