
// variable de Id de usario
let id_user = 0;

// obteniendo los elementos
let register = document.getElementById('bookin');
let login = document.getElementById('getInto');
let FormLogin = document.getElementById('bookin_2');
let FormRegister = document.getElementById('getInto_2');

// Mostrar el formulario para crear usuario 
function showForm(){
    register.classList.toggle('display');
    login.classList.toggle('display');
    FormRegister.classList.toggle('display');
}

// muestra el formulario de user creado.
function Login(){
    register.classList.toggle('display');
    login.classList.toggle('display');
    FormLogin.classList.toggle('display');
}

register.addEventListener('click',showForm);
login.addEventListener('click',Login);

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

function register_User(){
    let nameregister = document.getElementById( 'nameregister').value;
    let emailregister = document.getElementById('emailregister').value;
    let passwordregister = document.getElementById('passwordregister').value;
    id_user = id_user +1; 
    console.log(nameregister,emailregister,passwordregister, id_user);
   
    
    new_user = new User_Form_Regist(id_user,nameregister,emailregister,passwordregister);
    
   return new_user;      
} 
send_register.addEventListener('click', register_User);
send_register.addEventListener('click', ()=>{
    if(new_user == ''){
        console.log('sin objeto');
    }else{    
        console.log();
        export default  new_user;
    }
});
//export default new_user