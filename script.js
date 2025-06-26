document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evitar que el formulario se envíe

    alert('¡Formulario enviado! Gracias por registrarte.');

    form.reset(); // limpiar el formulario
  });
});
