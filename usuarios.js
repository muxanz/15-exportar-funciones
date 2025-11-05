// usuarios.js
export function crearUsuario(nombre, rol) {
  const fechaActual = new Date().toLocaleDateString();
  return {
    nombre,
    rol,
    fechaRegistro: fechaActual
  };
}
