import {PI, IVA, DESCUENTO} from './constantes.js';

export const sumar = function (a, b) {
    return a + b;

}
export const restar = function (a, b) {
    return a - b;

}
export const multiplicar = function (a, b) {
    return a * b;

}

export const areaCirculo = function (radio) {
    return PI * (radio * radio);
}

export const calcularTotal = function (precio, cantidad) {
    return precio * cantidad;
}

export const aplicarImpuestos = function (total) {
    return (total * IVA) + total;
}

export const aplicarDescuento = function (total) {
    return total - (total * DESCUENTO);
}