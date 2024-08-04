
// variable de Id de usario
let id_user = 0;

// obteniendo los elementos

let register = document.getElementById('bookin');
let login = document.getElementById('getInto');
let FormLogin = document.getElementById('bookin_2');
let FormRegister = document.getElementById('getInto_2');
console.log(register);
// Mostrar el formulario para crear usuario 
function showForm(){
register.classList.toggle('display');
login.classList.toggle('display');
FormRegister.classList.toggle('display');
setTimeout( ()=>{
    register.classList.toggle('display');
    login.classList.toggle('display');
    FormRegister.classList.toggle('display');
},50000);
};

// muestra el formulario de user creado.
function Login(){
register.classList.toggle('display');
login.classList.toggle('display');
FormLogin.classList.toggle('display');
setTimeout( ()=>{
    register.classList.toggle('display');
    login.classList.toggle('display');
    FormLogin.classList.toggle('display');
},50000);

};

register.addEventListener('click', showForm);
login.addEventListener('click', Login);


//Evento para obtener los datos del formulario registro
let send_register = document.querySelector('input[type="submit"]');

class User_Form_Regist{
constructor(id_user, username, email, password){
    this.id_user = id_user;
    this.username = username;
    this.email = email;
    this.password = password; 
};
}

let new_user= '';

// registro y envio de los datos a la base de datos
async function register_User(){
let nameregister = document.getElementById( 'nameregister').value;
let emailregister = document.getElementById('emailregister').value;
let passwordregister = document.getElementById('passwordregister').value;
id_user = id_user +1; 
console.log(nameregister,emailregister,passwordregister, id_user);


new_user = new User_Form_Regist(id_user,nameregister,emailregister,passwordregister);
console.log(new_user);

try {
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_user)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Datos enviados exitosamente:', result);
      } else {
        console.log('Error al enviar los datos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
     
} 
send_register.addEventListener('click', register_User);

let send_login = document.getElementById('sendlogin');
console.log(send_login);
async function login_user(){
  let email_user = document.getElementById('emaillogin').value;
  let password_user = document.getElementById('passwordlogin').value;
  console.log(email_user,password_user);
}
send_login.addEventListener('click', login_user);
