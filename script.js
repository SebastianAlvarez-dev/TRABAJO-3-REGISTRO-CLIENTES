document.getElementById("formCliente").addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let cedula = document.getElementById("cedula").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let direccion = document.getElementById("direccion").value.trim();
  let telefono = document.getElementById("telefono").value.trim();

  if (!nombre || !cedula || !correo || !direccion || !telefono) {
    alert("Por favor complete todos los campos");
    return;
  }

  let mensaje = `
    \u2705 Registro correcto:<br>
    <b>Nombre:</b> ${nombre}<br>
    <b>Cédula:</b> ${cedula}<br>
    <b>Correo:</b> ${correo}<br>
    <b>Dirección:</b> ${direccion}<br>
    <b>Teléfono:</b> ${telefono}
  `;

  document.getElementById("resultado").innerHTML = mensaje;
  document.getElementById("formCliente").reset();
});
