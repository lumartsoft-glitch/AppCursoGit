/* filepath: c:\Users\lmartinez\Curso Git\git_github\script.js */
function handleLogin() {
  var user = document.getElementById('username').value.trim();
  var pass = document.getElementById('password').value;
  var status = document.getElementById('status');

  if (!user || !pass) {
    status.style.color = '#d63d3d';
    status.textContent = 'Completa usuario y contraseña.';
    return;
  }

  status.style.color = '#2f8a4c';
  status.textContent = 'Inicio de sesión simulado: usuario = ' + user;
  // Reemplazar con lógica real de autenticación
}