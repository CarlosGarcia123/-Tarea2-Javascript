//TAREA 2 JAVASCRIPT


//Correo Eectronico
let email = prompt("Escriba su correo electronico");


let valueEmail = email.split("@");

console.log(valueEmail);
//Capturar en un prompt el correo de un usuario
let user = valueEmail[0];
let domain = valueEmail[1];

alert(`El usuario del correo es ${user} y su dominio es ${domain}`);









