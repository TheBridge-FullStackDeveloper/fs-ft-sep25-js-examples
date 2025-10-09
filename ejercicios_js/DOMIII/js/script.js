const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);
  

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

  const email = event.target.email;
  const password = event.target.password;


  // Validación de email
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, introduce un email válido.');
    return;
  }

  // Validación de contraseña
  const passwordRegex = /^[a-zA-Z0-9!@#$%&]{6,20}$/;
  if (!passwordRegex.test(password)) {
    alert('La contraseña debe tener entre 6 y 20 caracteres y puede incluir !,@,#,$,%,&.');
    return;
  }

  alert('Formulario enviado correctamente.');
});