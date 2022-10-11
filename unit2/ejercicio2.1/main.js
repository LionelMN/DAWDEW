let exercisesDiv = document.getElementById('exercisesGallery');
let currentExercise = document.getElementById('currentExercise');

function createExercisesCards(){
    for(let i in exercises){
        let card = document.createElement("div");
        card.classList.add("exerciseCard");
        let cardTitle = document.createElement("h4");
        let titleText = document.createTextNode(`Ejercicio ${exercises[i].exercise}`);
        cardTitle.appendChild(titleText);
        let cardBody = document.createElement("p");
        let bodyText = document.createTextNode(exercises[i].enun);
        cardBody.appendChild(bodyText);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        card.addEventListener('click', exercises[i].function)
        exercisesDiv.appendChild(card)
    }
}


//Ejercicio 1: Realiza una página en la que crees dos variables “string”, las “sumes” e imprimas el resultado.

function ejercicio1(){
    let string1 = "Hola";
    let string2 = " mundo";
    let sumaString = string1 + string2;
    console.log(sumaString);
}

//Ejercicio 2: La función typeof() devuelve el tipo de una variable. Hacer un script que te diga el tipo de un par de variables, sin inicializarlas y posteriormente con un valor (string, number y boolean).

const ejercicio2 = () => {
    let variable1;
    let variable2;

    console.log(typeof(variable1));
    console.log(typeof(variable2));

    let string = "hola";
    let number = -5;
    let boolean = false;
    console.log(typeof(string));
    console.log(typeof(number));
    console.log(typeof(boolean));
}

//Ejercicio 3: Vamos a realizar una pequeña página que pida al usuario un par de números y mediante una condicional le digamos si el primero es mayor que el segundo o es menor o iguales. Es importante recordar que hemos de cambiar el tipo de string a int usando la función parseInt();
let button3 = document.getElementById('submitButton3');
let resultInput3 = document.getElementById('resultEjer3');

const ejercicio3 = () =>{
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    if(number1 == number2)
        resultInput3.value = "Son iguales";
    else{
        if(number1 > number2)
            resultInput3.value =  "El número 1 es el mayor";
        else
            resultInput3.value =  "El número 2 es el mayor";
    }
}



//Ejercicio 4: Veamos otro ejemplo sencillo que nos ilustra sobre el manejo del if. Este script nos devuelve “hola” si no introducimos nada o aquello que hemos escrito.
let button4 = document.getElementById('submitButton4');
let resultInput4 = document.getElementById('resultEjer4');

const ejercicio4 = () => {
    let nombre = document.getElementById('nombre').value;
    if(nombre == ""){
        resultInput4.value = "hola";
    } else{
        resultInput4.value = nombre;
    }
}



//Ejercicio 5: Hay un formato para el if que se utiliza mucho en determinadas ocasiones y que nos ayuda a poner nuestro código más claro. /* otra forma del if sería: (final==null ? document.write("Hola"): document.write(final));*/

const ejercicio5 = () => {
    let N1,N2;
    N1=parseInt(prompt ("Primer número",""));
    N2=parseInt(prompt ("Segundo número",""));
    (N1>N2 ? currentExercise.innerHTML = (N1 + " > " + N2) : currentExercise.innerHTML = (N2 + " > " + N1));
}

//Ejercicio 6: Vamos a hacer una pausa para asimilar el bucle for con un ejercicio que no encierra ninguna dificultad si hemos entendido el funcionamiento del bucle.

//Se trata de hacer un bucle que escriba en una página web los encabezamientos desde <h1> hasta <h6> con un texto que ponga "Encabezado de nivel x".
/*Lo que deseamos escribir en una página web mediante JavaScript es lo siguiente:
<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
<h4>Encabezado de nivel 4</h4>
<h5>Encabezado de nivel 5</h5>
<h6>Encabezado de nivel 6</h6>
Para ello tenemos que hacer un bucle que empiece en 1 y termine en 6 y en cada
iteración escribiremos el encabezado que toca.*/

function ejercicio6(){
    let text = "";
    for (let i = 0; i < 6; i++) {
        text += `<h${i+1}>Encabezado de nivel ${i+1}</h${i+1}>`;
    }
    currentExercise.innerHTML = text;
}

//Ejercicio 7: Veamos el mismo ejemplo anterior del bucle for, pero con un while.

function ejercicio7(){
    let textWhile = "";
    let j = 0;
    while(j < 6){
        textWhile += `<h${j+1}>Encabezado de nivel ${j+1} con while</h${j+1}>`;
        j++;
    };
    currentExercise.innerHTML = textWhile;
}

//Ejercicio 8: Realizar un programa que solicite al usuario un valor, y presente en pantalla la cuenta atrás y luego la cuenta hacia delante. Hacerlo con un bucle for.

const ejercicio8 = () =>{
    let pedida;
    pedida = prompt("Introduzca un número");
    let cuentaAtras = "";
    let cuentaDelante = "";
    for (let i = 0; i < pedida; i++) {
        cuentaDelante += `${i + 1}, `
        cuentaAtras += `${pedida - i}, `
    }
    currentExercise.innerHTML = (`${cuentaDelante} --- ${cuentaAtras}`);
}

//Ejercicio 9: El mismo anterior pero con bucle while.

const ejercicio9 = () => {
    let pedida;
    pedida = prompt("Introduzca un número");
    let cuentaAtras = "";
    let cuentaDelante = "";
    let i = 0;
    while (i < pedida) {
        cuentaDelante += `${i + 1}, `
        cuentaAtras += `${pedida - i}, `
        i++;
    }
    currentExercise.innerHTML = (`${cuentaDelante} --- ${cuentaAtras}`);
}

//Ejercicio 10: Hacer una Página web que genere una pirámide de 1 a 50, formada de la siguiente forma:
/*
1
22
333
4444
55555
666666
7777777
.......
*/

const ejercicio10 = () => {
    let pyramid = "Imprimimos la pirámide";
    for (let i = 0; i < 51; i++) {
        for (let j = 0; j < i; j++) {
            pyramid += `${i}`;
        }
        pyramid += "<br>";
    }
    currentExercise.innerHTML = (pyramid);
}

//Ejercicio 11: Hacer una Página web que genere una pirámide de 1 a 50, formada de la siguiente forma:
/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678910
1234567891011
...
*/

const ejercicio11 = () => {
    let pyramid = "Imprimimos la pirámide";
    for (let i = 0; i < 51; i++) {
        for (let j = 1; j <= i; j++) {
            pyramid += `${j}`;
        }
        pyramid += "<br>";
    }
    currentExercise.innerHTML = (pyramid);
}

const exercises = {
    "0" : {
        "exercise" : 1,
        "enun" : 'Realiza una página en la que crees dos variables “string”, las “sumes” e imprimas el resultado por consola.',
        "function" : ejercicio1
    },
    "1" : {
        "exercise" : 2,
        "enun" : 'La función typeof() devuelve el tipo de una variable. Hacer un script que te diga el tipo de un par de variables, sin inicializarlas y posteriormente con un valor (string, number y boolean).',
        "function" : ejercicio2
    },
    "2" : {
        "exercise" : 5,
        "enun" : 'Hay un formato para el if que se utiliza mucho en determinadas ocasiones y que nos ayuda a poner nuestro código más claro. /* otra forma del if sería: (final==null ? document.write("Hola"): document.write(final));',
        "function" : ejercicio5
    },
    "3" : {
        "exercise" : 6,
        "enun" : 'Vamos a hacer una pausa para asimilar el bucle for con un ejercicio que no encierra ninguna dificultad si hemos entendido el funcionamiento del bucle Se trata de hacer un bucle que escriba en una página web los encabezamientos desde <h1> hasta <h6> con un texto que ponga Encabezado de nivel x',
        "function" : ejercicio6
    },
    "4" : {
        "exercise" : 7,
        "enun" : 'Veamos el mismo ejemplo anterior del bucle for, pero con un while.',
        "function" : ejercicio7
    },
    "5" : {
        "exercise" : 8,
        "enun" : 'Realizar un programa que solicite al usuario un valor, y presente en pantalla la cuenta atrás y luego la cuenta hacia delante. Hacerlo con un bucle for',
        "function" : ejercicio8
    },
    "6" : {
        "exercise" : 9,
        "enun" : 'Veamos el mismo ejemplo anterior del bucle for, pero con un while.',
        "function" : ejercicio9
    },
    "7" : {
        "exercise" : 10,
        "enun" : 'Hacer una Página web que genere una pirámide de 1 a 50, formada de la siguiente forma: \n 1 \n 22 \n 333 \n .... .',
        "function" : ejercicio10
    },
    "8" : {
        "exercise" : 11,
        "enun" : 'Hacer una Página web que genere una pirámide de 1 a 50, formada de la siguiente forma: \n 1 \n 12 \n 123 \n .... .',
        "function" : ejercicio11
    },
}

window.onload = () => {
    createExercisesCards();
    button3.addEventListener('click', ejercicio3);
    button4.addEventListener('click', ejercicio4)
}
