//obtenmos los valores del formulario
const inputName = document.getElementById('userName').value;
const inputEmail = document.getElementById('userEmail').value;
const inputPassword = document.getElementById('password').value;
const inputrepeatPassword = document.getElementById('repeatPassword').value;

//validamos que las contraseñas coincidan
if (inputPassword !== inputrepeatPassword) {
    alert('Las contraseñas no coinciden');
}

//guardamos al usuario en el local storage
const user = {
    name: inputName,
    email: inputEmail,
    password: inputPassword
}
localStorage.setItem('user', JSON.stringify(user));

//validamos para se obligue a rellenar los campos
if (inputName === '' || inputEmail === '' || inputPassword === '' || inputrepeatPassword === '') 
return alert('Por favor, rellene todos los campos');

//validamos el formato del email
else{
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail))

    alert('El email es correcto');  
} 
//validamos password

  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(inputPassword) === false){
    alert('El registro se ha realizado correctamente');
    
}
// Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.


if (inputField.value.trim() === '') {
    message.classList.remove('hidden'); // Muestra el mensaje
    
    setTimeout(function() {
        message.classList.add('hidden'); // Oculta el mensaje después de 3 segundos
    }, 3000);
}