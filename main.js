// main.js
import { PI, IVA, DIAS_SEMANA } from "./constantes.js";
import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario } from "./usuarios.js";
import {
  sumar,
  restar,
  multiplicar,
  areaCirculo,
  calcularTotal,
  aplicarImpuestos,
  aplicarDescuento,
  aplicarDescuentoPorRol
} from "./operaciones-matematicas.js";

console.log("---Ejercicio 1: Archivo Constantes---");
const radio = 5;
const area = PI * radio ** 2;
console.log(`Área del círculo con radio ${radio}: ${area}`);
const precio = 100;
const precioConIVA = precio + precio * IVA;
console.log(`Precio con IVA: ${precioConIVA}`);
console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);
console.log("\n---Ejercicio 2: Exportar Funciones Matemáticas---");
console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));
console.log("Área del círculo (función):", areaCirculo(5));
console.log("\n---Ejercicio 3: Calculadora de Impuestos---");
const total = calcularTotal(50, 3);
console.log("Total sin impuestos:", total);
const totalConImpuestos = aplicarImpuestos(total);
console.log("Total con impuestos:", totalConImpuestos);
const totalConDescuento = aplicarDescuento(totalConImpuestos);
console.log("Total con descuento:", totalConDescuento);
console.log("\n----Ejercicio 4: Gestión de Usuarios---");
const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);
console.log("\n---Ejercicio 5: Sistema de Descuentos por Rol---");
const subtotalAdmin = calcularTotal(25, 4);
const subtotalCliente = calcularTotal(50, 3);
const totalAdminConImpuestos = aplicarImpuestos(subtotalAdmin);
const totalClienteConImpuestos = aplicarImpuestos(subtotalCliente);
const totalAdminConDescuento = aplicarDescuentoPorRol(totalAdminConImpuestos, usuario1);
const totalClienteConDescuento = aplicarDescuentoPorRol(totalClienteConImpuestos, usuario2);
console.log("ADMIN:");
console.log("Subtotal:", subtotalAdmin);
console.log("Con impuestos:", totalAdminConImpuestos);
console.log("Con descuento por rol:", totalAdminConDescuento);
console.log("\nCLIENTE:");
console.log("Subtotal:", subtotalCliente);
console.log("Con impuestos:", totalClienteConImpuestos);
console.log("Con descuento por rol:", totalClienteConDescuento);
