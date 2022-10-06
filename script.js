const h1 = document.querySelector('h1');
const form = document.querySelector("#form")
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResutl = document.querySelector('#result');


/*form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log(event);
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResutl.innerText = "Resultado: " + sumaInput;
    
} */


btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    //console.log(event);
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResutl.innerText = "Resultado: " + sumaInput;
    
} 