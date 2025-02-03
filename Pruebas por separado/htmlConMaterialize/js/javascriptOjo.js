const togglePassword = document.querySelector('.toggle-password');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
// Alternar el tipo de input entre "password" y "text"
const type = passwordField.type === 'password' ? 'text' : 'password';
passwordField.type = type;
            
// Cambiar el icono de "visibility" a "visibility_off" y viceversa
this.querySelector('i').textContent = type === 'password' ? 'visibility' : 'visibility_off';
});