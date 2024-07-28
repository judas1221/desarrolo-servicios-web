let button = document.querySelector('.button button');
let form= document.querySelector('.button form');
let efect= document.getElementById('2');
let cancel= document.getElementById('x');

console.log(button); 

// Mostrar el formulario 
function showForm(){
    form.classList.toggle('display');
    efect.classList.toggle('display');
    button.style.cssText = "transform: rotate(-90deg) translate(0,-260px);";
}
// Regresar el boton al origen.
function moveTo(){
    button.style.cssText = "transform: rotate(-90deg) translate(0,40px);";
}

button.addEventListener('click',showForm);
button.addEventListener('mouseover',showForm);
cancel.addEventListener('click',showForm);
cancel.addEventListener('click',moveTo);
