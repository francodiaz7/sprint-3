async function obtenerDatos() {
  const response = await fetch("http://127.0.0.1:5500/datos.json");
  const json = await response.json();

  //   console.log(json); entrega el json como texto
  console.log(json);
  console.log(json.nombre);
  console.log(json.direccion.colonia);
  json.experiencia.forEach((elemento) => {
    console.log(elemento.empresa);
  });

  console.log(json.direccion.pago_agua);
  console.log(json.direccion["pago_agua"]);
}

obtenerDatos();
