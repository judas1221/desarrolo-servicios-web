let register = document.getElementById('bookin');
let login = document.getElementById('getInto');
let FormLogin = document.getElementById('bookin_2');
let FormRegister = document.getElementById('getInto_2');

console.log(register,login);
console.log(FormLogin,FormRegister); 

// Mostrar el formulario 
function showForm(){
    register.classList.toggle('display')
    login.classList.toggle('display');
    FormRegister.classList.toggle('display');
}
// Regresar el boton al origen.
function Login(){
    register.classList.toggle('display')
    login.classList.toggle('display');
    FormLogin.classList.toggle('display');
}

register.addEventListener('click',showForm);
login.addEventListener('click',Login);
